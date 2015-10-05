/*
 * Chris Samuel
 * ksamuel.chris@icloud.com
 *
 * October 15, 2015
 *
 *   Filename : navbar.js
 *
 * */

// we will import the following:
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

//for navbar specific

var _storesNavbarStore = require('../stores/NavbarStore');

var _storesNavbarStore2 = _interopRequireDefault(_storesNavbarStore);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var Navbar = (function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, props);
        this.state = _storesNavbarStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Navbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesNavbarStore2['default'].listen(this.onChange);
            _actionsNavbarActions2['default'].getCharacterCount();

            var socket = io.connect();

            socket.on('onlineUsers', function (data) {
                navbarActions.updateOnlineUsers(data);
            });

            $(document).ajaxStart(function () {
                NavBarActions.updateOnlineUsers(data);
            });

            $(document).ajaxComplete(function () {
                setTimeout(function () {
                    _actionsNavbarActions2['default'].updateAjaxAnimation('fadeOut');
                }, 750);
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesNavbarStore2['default'].unlisten(this.onChange);
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

            var searchQuery = this.state.searchQuery.trim();

            if (searchQuery) {
                _actionsNavbarActions2['default'].findCharacter({
                    searchQuery: searchQuery,
                    searchFrom: this.refssearchForm.getDOMNode(),
                    router: this.context.router
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'nav',
                { className: 'navbar navbar-default navbar-static-top' },
                _react2['default'].createElement(
                    'div',
                    { className: 'navbar-header' },
                    _react2['default'].createElement(
                        'button',
                        { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
                        _react2['default'].createElement(
                            'span',
                            { className: 'sr-only' },
                            'Toggle Navigation'
                        ),
                        _react2['default'].createElement('span', { className: 'icon-bar' }),
                        _react2['default'].createElement('span', { className: 'icon-bar' }),
                        _react2['default'].createElement('span', { className: 'icon-bar' })
                    ),
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/', className: 'navbar-brand' },
                        _react2['default'].createElement(
                            'span',
                            { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri' }),
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri' }),
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri' }),
                            _react2['default'].createElement('div', { className: 'tri invert' })
                        ),
                        'NEF',
                        _react2['default'].createElement(
                            'span',
                            { className: 'badge badge-up badge-danger' },
                            this.state.onlineUsers
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { id: 'navbar', className: 'navbar-collapse collapse' },
                    _react2['default'].createElement(
                        'form',
                        { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
                        _react2['default'].createElement(
                            'div',
                            { className: 'input-group' },
                            _react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: this.state.totalCharacters + ' characters', value: this.state.searchQuery, onChange: _actionsNavbarActions2['default'].updateSearchQuery }),
                            _react2['default'].createElement(
                                'span',
                                { className: 'input-group-btn' },
                                _react2['default'].createElement(
                                    'button',
                                    { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                                    _react2['default'].createElement('span', { className: 'glyphicon glyphicon-search' })
                                )
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'ul',
                        { className: 'nav navbar-nav' },
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/' },
                                'Home'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/stats' },
                                'Stats'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'dropdown' },
                            _react2['default'].createElement(
                                'a',
                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                'Top 100 ',
                                _react2['default'].createElement('span', { className: 'caret' })
                            ),
                            _react2['default'].createElement(
                                'ul',
                                { className: 'dropdown-menu' },
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top' },
                                        'Top Overall'
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top/caldari' },
                                        'Caldari'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/caldari/achura' },
                                                'Achura'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/caldari/civire' },
                                                'Civire'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/caldari/deteis' },
                                                'Deteis'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top/gallente' },
                                        'Gallente'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/gallente/gallente' },
                                                'Gallente'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/gallente/intaki' },
                                                'Intaki'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/gallente/jin-mei' },
                                                'Jin-Mei'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top/minmatar' },
                                        'Minmatar'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/minmatar/brutor' },
                                                'Brutor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/minmatar/sebiestor' },
                                                'Sebiestor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/minmatar/vherokior' },
                                                'Vherokior'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top/amarr' },
                                        'Amarr'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/amarr/amarr' },
                                                'Amarr'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/amarr/ni-kunni' },
                                                'Ni-Kunni'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/amarr/khanid' },
                                                'Khanid'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement('li', { className: 'divider' }),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/shame' },
                                        'Hall of Shame'
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'dropdown' },
                            _react2['default'].createElement(
                                'a',
                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                'Female ',
                                _react2['default'].createElement('span', { className: 'caret' })
                            ),
                            _react2['default'].createElement(
                                'ul',
                                { className: 'dropdown-menu' },
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female' },
                                        'All'
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female/caldari' },
                                        'Caldari'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/caldari/achura' },
                                                'Achura'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/caldari/civire/' },
                                                'Civire'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/caldari/deteis' },
                                                'Deteis'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female/gallente' },
                                        'Gallente'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/gallente/gallente' },
                                                'Gallente'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/gallente/intaki' },
                                                'Intaki'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/gallente/jin-mei' },
                                                'Jin-Mei'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female/minmatar' },
                                        'Minmatar'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/minmatar/brutor' },
                                                'Brutor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/minmatar/sebiestor' },
                                                'Sebiestor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/minmatar/vherokior' },
                                                'Vherokior'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female/amarr' },
                                        'Amarr'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/amarr/amarr' },
                                                'Amarr'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/amarr/ni-kunni' },
                                                'Ni-Kunni'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/amarr/khanid' },
                                                'Khanid'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'dropdown' },
                            _react2['default'].createElement(
                                'a',
                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                'Male ',
                                _react2['default'].createElement('span', { className: 'caret' })
                            ),
                            _react2['default'].createElement(
                                'ul',
                                { className: 'dropdown-menu' },
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male' },
                                        'All'
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male/caldari' },
                                        'Caldari'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/caldari/achura' },
                                                'Achura'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/caldari/civire' },
                                                'Civire'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/caldari/deteis' },
                                                'Deteis'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male/gallente' },
                                        'Gallente'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/gallente/gallente' },
                                                'Gallente'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/gallente/intaki' },
                                                'Intaki'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/gallente/jin-mei' },
                                                'Jin-Mei'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male/minmatar' },
                                        'Minmatar'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/minmatar/brutor' },
                                                'Brutor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/minmatar/sebiestor' },
                                                'Sebiestor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/minmatar/vherokior' },
                                                'Vherokior'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male/amarr' },
                                        'Amarr'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/amarr/amarr' },
                                                'Amarr'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/amarr/ni-kunni' },
                                                'Ni-Kunni'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/amarr/khanid' },
                                                'Khanid'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/add' },
                                'Add'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
})(_react2['default'].Component);

Navbar.contextTypes = {
    router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = Navbar;
module.exports = exports['default'];

//# sourceMappingURL=navbar-compiled.js.map