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

var _storesHomeStore = require('../stores/HomeStore');

var _storesHomeStore2 = _interopRequireDefault(_storesHomeStore);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var _underscore = require('underscore');

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
        this.state = _storesHomeStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Home, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesHomeStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(character) {
            var winner = character.characterId;
            var loser = (0, _underscore.first)((0, _underscore.without)(this.state.characters, (0, _underscore.findWhere)(this.state.characters, { characterId: winner }))).characterId;
            _actionsHomeActions2['default'].vote(winner, loser);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var characterNodes = this.state.characters.map(function (character, index) {
                return _react2['default'].createElement(
                    'div',
                    { key: character.characterId, className: index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'thumbnail fadeInUp animated' },
                        _react2['default'].createElement('img', { onClick: _this.handleClick.bind(_this, character), src: 'http://image.eveonline.com/Character/' + character.characterId + '_512.jpg' }),
                        _react2['default'].createElement(
                            'div',
                            { className: 'caption text-center' },
                            _react2['default'].createElement(
                                'ul',
                                { className: 'list-inline' },
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        'strong',
                                        null,
                                        'Race:'
                                    ),
                                    ' ',
                                    character.race
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        'strong',
                                        null,
                                        'Bloodline:'
                                    ),
                                    ' ',
                                    character.bloodline
                                )
                            ),
                            _react2['default'].createElement(
                                'h4',
                                null,
                                _react2['default'].createElement(
                                    _reactRouter.Link,
                                    { to: '/characters/' + character.characterId },
                                    _react2['default'].createElement(
                                        'strong',
                                        null,
                                        character.name
                                    )
                                )
                            )
                        )
                    )
                );
            });

            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                _react2['default'].createElement(
                    'h3',
                    { className: 'text-center' },
                    'Click on the portrait. Select your favorite.'
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'row' },
                    characterNodes
                )
            );
        }
    }]);

    return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

//# sourceMappingURL=home-compiled.js.map