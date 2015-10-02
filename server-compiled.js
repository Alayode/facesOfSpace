
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

'use strict';

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

juice.listen(juice.get('port'), function () {
    console.log('Express server is using the JUICE on port ' + juice.set('port'));
});

//# sourceMappingURL=server-compiled.js.map