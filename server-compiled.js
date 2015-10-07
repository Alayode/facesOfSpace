
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

'use strict';

var swig = require('swig');
var React = require('react');
var Router = require('react-router');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

//Add the mongoose module and Character.js file
var mongoose = require('mongoose');
var Character = require('./models/character');
var express = require('express');

var routes = require('./app/routes');
var app = express();

app.set('port', process.env.PORT || 9876);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express['static'](path.join(__dirname, 'public')));

// Express middleware  components
// WILL BE EXECUTED ON EVERY REQUEST TO THE SERVER.
app.use(function (req, res) {
    Router.run(routes, req.path, function (Handler) {
        var html = React.renderToString(React.createElement(Handler));
        var page = swig.renderFile('views/index.html', { html: html });
        res.send(page);
    });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function (socket) {
    onlineUsers++;
    console.log(onlineUsers);

    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

    socket.on('disconnect', function () {
        onlineUsers--;
        io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
    });
});

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

//# sourceMappingURL=server-compiled.js.map