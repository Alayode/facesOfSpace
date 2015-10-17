
/*
 * Chris Samuel
 * ksamuel.chris@icloud.com
 *
 * October 1, 2015
 *
 * FileName: server.js
 *
 * Description:
 *
 * File will be used for running node/express for our voting juicelication.
 * Chris Samuel
 * ksamuel.chris@gmail.com
 *
 * October,
 *
 *
 * */

//Express API Route Dependencies

var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

//React Routes

var swig   = require('swig');
var React  = require('react');
var Router = require('react-router');
var path    =    require('path');
var logger  =     require('morgan');
var bodyParser = require('body-parser');


//Add the mongoose module and Character.js file
var mongoose = require('mongoose');
var Character = require('./models/character');
var express =    require('express');



var routes = require('./app/routes');
var config = require('./config');


mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});


var juice = express();

juice.set('port', process.env.PORT || 9876);
juice.use(logger('dev'));
juice.use(bodyParser.json());
juice.use(express.static(path.join(__dirname,'public')));


/*
* POST /api/characters
* Adds new characters to the database
*
* */


juice.post('/api/characters', function(req,res,next){
        var gender = req.body.gender;
        var characterName = req.body.name;//get a Character ID from a Character Name

        var characterIdLookupUrl = "https://api.eveonline.com/eve/CharacterID.xml.aspx?names=" + characterName;

        // create a XML parser instance with xml2js
        var parser = new xml2js.Parser();


        //waterfall(tasks, [callback])
            //use the name and the url to find if the name is in the database already
    async.waterfall([
            function(callback){
                request.get(characterIdLookupUrl,function(err,request,xml){
                    if(err)return next(err);
                    //parse the XML reponse
                    parser.parseString(xml,function(err,parsedXml){
                        if (err) return next (err);
                        try{

                            var characterId = parsedXml.eveapi.result[0].row[0].$.characterID;


                            Character.findOne({ characterId: character }, function(err,character){
                                if(err) return next (err);

                                if (character) {
                                    return res.status(409).send({ message: character.name +'is already in database'})
                                }

                                callback(err,characterId);
                            });

                        }catch (e){
                            return res.status(400).send({message: 'XML Parse Error'});
                        }
                    });
                });
            },//pass the CharacterID to the next function in the async .waterfall stage
            function(characterId){
                var characterInfoUrl = 'https://api.eveonline.com/eve/CharacterInfo.xml.aspx?characterID=' + characterId;

                //get basic character information from a character ID
                request.get({ url:characterInfoUrl},function(err,request,xml){
                    if (err) return next (err);
                    parser.parseString(xml,function(err,parsedXml){
                        if (err) return res.send(err);
                        try{
                            var name = parsedXml.eveapi.result[0].characterName[0];
                            var race = parsedXml.eveapi.result[0].race[0];
                            var bloodline = parsedXml.eveapi.result[0].bloodline[0];

                            var character = new  Character({
                                characterId: characterId,
                                name: name,
                                race:race,
                                bloodline:bloodline,
                                gender:gender,
                                random: [Math.random(),0]
                            });//Add a new character to the database
                        character.save(function (err) {
                            if (err) return next (err);
                            res.send({ message:characterName + 'has been added successfully'});
                        });
                        }catch (e){
                            res.status(404).send({ message: characterName + 'is not a registered citzen of Faces of Space'})
                        }
                    });
                });
            }

        ]);
});




/**
 * PUT /api/characters
 * Update winning and losing count for both characters.
 */
app.put('/api/characters', function(req, res, next) {
  var winner = req.body.winner;
  var loser = req.body.loser;

  if (!winner || !loser) {
    return res.status(400).send({ message: 'Voting requires two characters.' });
  }

  if (winner === loser) {
    return res.status(400).send({ message: 'Cannot vote for and against the same character.' });
  }

  async.parallel([
      function(callback) {
        Character.findOne({ characterId: winner }, function(err, winner) {
          callback(err, winner);
        });
      },
      function(callback) {
        Character.findOne({ characterId: loser }, function(err, loser) {
          callback(err, loser);
        });
      }
    ],
    function(err, results) {
      if (err) return next(err);

      var winner = results[0];
      var loser = results[1];

      if (!winner || !loser) {
        return res.status(404).send({ message: 'One of the characters no longer exists.' });
      }

      if (winner.voted || loser.voted) {
        return res.status(200).end();
      }
    //We are using Async parallel to make two database queries
    //    simultaneously, since one query does not depend on another
    //    however, because we have two separate MongoDB documents,
    //    that's two independent asynchronous operations, hence
    // another async.parallel. Basically, we respond with a success only when
    // both characters have finished updating and there were no errors

      async.parallel([
        function(callback) {
          winner.wins++;
          winner.voted = true;
          winner.random = [Math.random(), 0];
          winner.save(function(err) {
            callback(err);
          });
        },
        function(callback) {
          loser.losses++;
          loser.voted = true;
          loser.random = [Math.random(), 0];
          loser.save(function(err) {
            callback(err);
          });
        }
      ], function(err) {
        if (err) return next(err);
        res.status(200).end();
      });
    });
});




// Express middleware  components
// WILL BE EXECUTED ON EVERY REQUEST TO THE SERVER.
juice.use(function(req,res){
    Router.run(routes, req.path,function(Handler){
        var html = React.renderToString(React.createElement(Handler));
        var page = swig.renderFile('views/index.html',{html:html});
        res.send(page);
    });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(juice);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
    onlineUsers++;
    console.log(onlineUsers);

    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

    socket.on('disconnect', function() {
        onlineUsers--;
        io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
    });
});

server.listen(juice.get('port'), function() {
    console.log('Express server listening on port ' + juice.get('port'));
});
