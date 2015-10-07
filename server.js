
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
* File will be used for running node/express for our voting application.
* Chris Samuel
* ksamuel.chris@gmail.com
*
* October,
*
*
* */

//React Routes

var swig   = require('swig');
var React  = require('react');
var Router = require('react-router');
var routes = require('./app/routes');



var express =    require('express');
var path    =    require('path');
var logger  =     require('morgan');
var bodyParser = require('body-parser');
//var babel =      require("babel-core").transform("code", options);

//add some juice!!!

var juice = express();

juice.set('port', process.env.PORT || 9876);
juice.use(logger('dev'));
juice.use(bodyParser.json());
juice.use(express.static(path.join(__dirname,'public')));


// Express middleware  components
// WILL BE EXECUTED ON EVERY REQUEST TO THE SERVER.
juice.use(function(req, res) {
    Router.run(routes, req.path, function(Handler) {
        var html = React.renderToString(React.createElement(Handler));
        var page = swig.renderFile('views/index.html', { html: html });
        res.send(page);
    });
});


//  TODO: Replace this block of code for socket.IO
//juice.listen(juice.get('port'),function(){
//    console.log('Express server is using the JUICE on port ' + juice.set('port'));
//});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(juice);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
    onlineUsers++;

    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

    socket.on('disconnect', function() {
        onlineUsers--;
        io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
    });
});

server.listen(juice.get('port'), function() {
    console.log('Express server listening on port ' + juice.get('port'));
});
/*
* Explanation for refactor with socket.io
*
* WebSocket connections are established. With this block of code
* when it does, the onlineUsers count will increase by 1 (This is a
* global variable )and a message is then broadcasts
*
* " Hey I have this many users right now ."
*
* When someone closes a connection the count is then decreased by one
* This will then run another message stating hey I have this many online users now.
*
*
*
*
*
* */