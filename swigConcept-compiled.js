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

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
//var babel =      require("babel-core").transform("code", options);

//add some juice!!!

var juice = express();

swig.renderFile('template.html', {}, function (err, output) {
    if (err) {
        throw err;
    }
    console.log(output);
});

//# sourceMappingURL=swigConcept-compiled.js.map