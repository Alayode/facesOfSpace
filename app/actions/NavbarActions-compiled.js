'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var NavbarActions = (function () {
    function NavbarActions() {
        _classCallCheck(this, NavbarActions);

        this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getCharacterCountSuccess', 'getCharacterCountFail', 'findCharacterSuccess', 'findCharacterFail');
    }

    _createClass(NavbarActions, [{
        key: 'findCharacter',
        value: function findCharacter(payload) {
            var _this = this;

            $.ajax({
                url: '/api/characters/search',
                data: { name: payload.searchQuery }
            }).done(function (data) {
                (0, _underscore.assign)(payload, data);
                _this.actions.findCharacterSuccess(payload);
            }).fail(function () {
                _this.actions.findCharacterFail(payload);
            });
        }
    }, {
        key: 'getCharacterCount',
        value: function getCharacterCount() {
            var _this2 = this;

            $.ajax({ url: '/api/characters/count' }).done(function (data) {
                _this2.actions.getCharacterCountSuccess(data);
            }).fail(function (jqXhr) {
                _this2.actions.getCharacterCountFail(jqXhr);
            });
        }
    }]);

    return NavbarActions;
})();

exports['default'] = _alt2['default'].createActions(NavbarActions);
module.exports = exports['default'];

//# sourceMappingURL=NavbarActions-compiled.js.map