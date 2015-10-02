
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
var routes = require('./app/routes');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
//var babel =      require("babel-core").transform("code", options);

//add some juice!!!

var juice = express();

juice.set('port', process.env.PORT || 9876);
juice.use(logger('dev'));
juice.use(bodyParser.json());
juice.use(express['static'](path.join(__dirname, 'public')));

// Express middleware  components
// WILL BE EXECUTED ON EVERY REQUEST TO THE SERVER.
juice.use(function (req, res) {
    Router.run(routes, req.path, function (Handler) {
        var html = React.renderToString(React.createElement(Handler));
        var page = swig.renderFile('views/index.html', { html: html });
        res.send(page);
    });
});

juice.listen(juice.get('port'), function () {
    console.log('Express server is using the JUICE on port ' + juice.set('port'));
});

//# sourceMappingURL=server-compiled.js.map