/*
*Chris Samuel
* ksamuel.chris@icloud.com
*
* October 5, 2015
*
*   Filename : Footer.js
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

var _storesFooterStore = require('../stores/FooterStore');

var _storesFooterStore2 = _interopRequireDefault(_storesFooterStore);

var _actionsFooterActions = require('../actions/FooterActions');

var _actionsFooterActions2 = _interopRequireDefault(_actionsFooterActions);

var Footer = (function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this, props);
        this.state = _storesFooterStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Footer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesFooterStore2['default'].listen(this.onChange);
            _actionsFooterActions2['default'].getTopCharacters();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesFooterStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var leaderboardCharacters = this.state.characters.map(function (character) {
                return _react2['default'].createElement(
                    'li',
                    { key: character.characterId },
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/characters/' + character.characterId },
                        _react2['default'].createElement('img', { className: 'thumb-md', src: 'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg' })
                    )
                );
            });

            return _react2['default'].createElement(
                'footer',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'container' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'row' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-5' },
                            _react2['default'].createElement(
                                'h3',
                                { className: 'lead' },
                                _react2['default'].createElement(
                                    'strong',
                                    null,
                                    'Information'
                                ),
                                ' and ',
                                _react2['default'].createElement(
                                    'strong',
                                    null,
                                    'Copyright'
                                )
                            ),
                            _react2['default'].createElement(
                                'p',
                                null,
                                'Powered by ',
                                _react2['default'].createElement(
                                    'strong',
                                    null,
                                    'Node.js'
                                ),
                                ', ',
                                _react2['default'].createElement(
                                    'strong',
                                    null,
                                    'MongoDB'
                                ),
                                ' and ',
                                _react2['default'].createElement(
                                    'strong',
                                    null,
                                    'React'
                                ),
                                ' with Flux architecture and server-side rendering.'
                            ),
                            _react2['default'].createElement(
                                'p',
                                null,
                                'You may view the ',
                                _react2['default'].createElement(
                                    'a',
                                    { href: 'https://github.com/Alayode/facesOfspace' },
                                    'Source Code'
                                ),
                                ' behind this project on GitHub.'
                            ),
                            _react2['default'].createElement(
                                'p',
                                null,
                                '© 2015 Kayode Alayode.'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-7 hidden-xs' },
                            _react2['default'].createElement(
                                'h3',
                                { className: 'lead' },
                                _react2['default'].createElement(
                                    'strong',
                                    null,
                                    'Leaderboard'
                                ),
                                ' Top 5 Characters'
                            ),
                            _react2['default'].createElement(
                                'ul',
                                { className: 'list-inline' },
                                leaderboardCharacters
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
})(_react2['default'].Component);

exports['default'] = Footer;
module.exports = exports['default'];

//# sourceMappingURL=footer-compiled.js.map