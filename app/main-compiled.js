
/*
* Chris Samuel
* ksamuel.chris@gmail.com
*
* fileName : main.js
*
* The main.js is the entry point for our React application. We use it in gulpfile.js where Browserify will traverse the entire
* tree of dependencies and generate the final bundle.js file. You will rarely have to touch this file after its initial setup.
*
* */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

//File Breakdown

/*
*HistoryLocation
*   to enable HTML5 History API in order to make URLs look pretty. For example, it navigates to http://localhost:3000/add instead of http://localhost:3000/#add. Since we are building an Isomorphic React application (rendered on the server and the client) we do not have to do any hacky
*   wildcard redirects
 *
 *
 *
 *  on the server to enable this support. It just works out of the box.
*
*
* */

//# sourceMappingURL=main-compiled.js.map