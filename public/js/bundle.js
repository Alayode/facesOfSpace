(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var AddCharacterActions = (function () {
    function AddCharacterActions() {
        _classCallCheck(this, AddCharacterActions);

        this.generateActions('addCharacterSuccess', 'addCharacterFail', 'updateName', 'updateGender', 'invalidName', 'invalidGender');
    }

    //create addCharacter function that does an POST ajax call.

    _createClass(AddCharacterActions, [{
        key: 'addCharacter',
        value: function addCharacter(name, gender) {
            var _this = this;

            $.ajax({
                url: '/api/characters',
                data: {
                    name: name,
                    gender: gender
                }
            }).done(function (data) {
                _this.actions.addCharacterSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addCharacterFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return AddCharacterActions;
})();

exports['default'] = _alt2['default'].createActions(AddCharacterActions);
module.exports = exports['default'];

},{"../alt":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _alt = require("alt");

var _alt2 = _interopRequireDefault(_alt);

exports["default"] = new _alt2["default"]();
module.exports = exports["default"];

},{"alt":"alt"}],3:[function(require,module,exports){

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
 * This components consists of a simple form with a text field, radio buttons and a submit button .
 * Success and error messages will be displayed within belp-block under the text field.
 *
 *
 *
 *
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesAddCharacterStore = require('../stores/AddCharacterStore');

var _storesAddCharacterStore2 = _interopRequireDefault(_storesAddCharacterStore);

var _actionsAddCharacterActions = require('../actions/AddCharacterActions');

var _actionsAddCharacterActions2 = _interopRequireDefault(_actionsAddCharacterActions);

var AddCharacter = (function (_React$Component) {
    _inherits(AddCharacter, _React$Component);

    function AddCharacter(props) {
        _classCallCheck(this, AddCharacter);

        _get(Object.getPrototypeOf(AddCharacter.prototype), 'constructor', this).call(this, props);
        this.state = _storesAddCharacterStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(AddCharacter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesAddCharacterStore2['default'].listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesAddCharacterStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            var name = this.state.name.trim();
            var gender = this.state.gender;

            if (!name) {
                _actionsAddCharacterActions2['default'].invalidName();
                this.refs.nameTextField.getDOMNode().focus();
            }

            if (!gender) {
                _actionsAddCharacterActions2['default'].invalidGender();
            }

            if (name && gender) {
                _actionsAddCharacterActions2['default'].addCharacter(name, gender);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                _react2['default'].createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-sm-8' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'panel-heading' },
                                'Add Character'
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2['default'].createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.nameValidationState },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'control-label' },
                                            'Character Name'
                                        ),
                                        _react2['default'].createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                                            onChange: _actionsAddCharacterActions2['default'].updateName, autoFocus: true }),
                                        _react2['default'].createElement(
                                            'span',
                                            { className: 'help-block' },
                                            this.state.helpBlock
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.genderValidationState },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2['default'].createElement('input', { type: 'radio', name: 'gender', id: 'female', value: 'Female', checked: this.state.gender === 'Female',
                                                onChange: _actionsAddCharacterActions2['default'].updateGender }),
                                            _react2['default'].createElement(
                                                'label',
                                                { htmlFor: 'female' },
                                                'Female'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2['default'].createElement('input', { type: 'radio', name: 'gender', id: 'male', value: 'Male', checked: this.state.gender === 'Male',
                                                onChange: _actionsAddCharacterActions2['default'].updateGender }),
                                            _react2['default'].createElement(
                                                'label',
                                                { htmlFor: 'male' },
                                                'Male'
                                            )
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary' },
                                        'Submit'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddCharacter;
})(_react2['default'].Component);

exports['default'] = AddCharacter;
module.exports = exports['default'];

},{"../actions/AddCharacterActions":1,"../stores/AddCharacterStore":8,"react":"react"}],4:[function(require,module,exports){
/*
* Chris Samuel
* ksamuel.chris@gmail.com
*
* October 2 2015
*
*
*
* */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_reactRouter.RouteHandler, null)
            );
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;

/*
* Routehandler is a component that renders the active child route handler.
* It will render one of the following components depending on the URL path:
* Home,Top 100, Profile or Add Character.
*
*       AngularJS Equivalent : <div ng-view></div>
 *              Which includes the rendered template of current route
*               into the main layout.
 *
  * */
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'alert alert-info' },
                'Hello from Home Component'
            );
        }
    }]);

    return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"react":"react"}],6:[function(require,module,exports){

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

},{"./routes":7,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsAddCharacter = require('./components/AddCharacter');

var _componentsAddCharacter2 = _interopRequireDefault(_componentsAddCharacter);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { handler: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/add', handler: _componentsAddCharacter2['default'] })
);
module.exports = exports['default'];

},{"./components/AddCharacter":3,"./components/App":4,"./components/Home":5,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsAddCharacterActions = require('../actions/AddCharacterActions');

var _actionsAddCharacterActions2 = _interopRequireDefault(_actionsAddCharacterActions);

var AddCharacterStore = (function () {
    function AddCharacterStore() {
        _classCallCheck(this, AddCharacterStore);

        this.bindActions(_actionsAddCharacterActions2['default']);
        this.name = '';
        this.gender = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
    }

    _createClass(AddCharacterStore, [{
        key: 'onAddCharacterSuccess',
        value: function onAddCharacterSuccess(successMessage) {
            this.nameValidationState = 'has-success';
            this.helpBlock = successMessage;
        }
    }, {
        key: 'onAddCharacterFail',
        value: function onAddCharacterFail(errorMessage) {
            this.nameValidationState = 'has-error';
            this.helpBlock = errorMessage;
        }
    }, {
        key: 'onUpdateName',
        value: function onUpdateName(event) {
            this.gender = event.target.value;
            this.genderValidationState = '';
        }
    }, {
        key: 'onInvalidGender',
        value: function onInvalidGender() {
            this.genderValidationState = 'has-error';
        }
    }]);

    return AddCharacterStore;
})();

exports['default'] = _alt2['default'].createStore(_actionsAddCharacterActions2['default']);

/*
* nameValidationState and genderValidationState
* refers to the bootstrap validationStates for forms.
*
*helpBlock
*
* is just a status message which gets displayed below the text field
*
* onInvalidName
*
* handler is fired when Character name field is empty.
*
* This is important cause for instance if the name does not exist in EVE Online Database it will be a different error message
* */
module.exports = exports['default'];

},{"../actions/AddCharacterActions":1,"../alt":2}]},{},[6]);
