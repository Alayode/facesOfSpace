
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

//# sourceMappingURL=AddCharacter-compiled.js.map