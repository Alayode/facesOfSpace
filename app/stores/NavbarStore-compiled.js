'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var NavbarStore = (function () {
    function NavbarStore() {
        _classCallCheck(this, NavbarStore);

        this.bindActions(_actionsNavbarActions2['default']);
        this.totalCharacters = 0;
        this.onlineUsers = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
    }

    _createClass(NavbarStore, [{
        key: 'onFindCharacterSuccess',
        value: function onFindCharacterSuccess(payload) {
            payload.router.transitionTo('/characters/' + payload.characterId);
        }
    }, {
        key: 'onFindCharacterFail',
        value: function onFindCharacterFail(payload) {
            payload.searchForm.classList.add('shake');
            setTimeout(function () {
                payload.searchForm.classList.remove('shake');
            }, 1000);
        }
    }, {
        key: 'onUpdateOnlineUsers',
        value: function onUpdateOnlineUsers(data) {
            this.onlineUsers = data.onlineUsers;
        }
    }, {
        key: 'onUpdateAjaxAnimation',
        value: function onUpdateAjaxAnimation(className) {
            this.ajaxAnimationClass = className; //fadein or fadeout
        }
    }, {
        key: 'onUpdateSearchQuery',
        value: function onUpdateSearchQuery(event) {
            this.searchQuery = event.target.value;
        }
    }, {
        key: 'onGetCharacterCountSuccess',
        value: function onGetCharacterCountSuccess(data) {
            this.totalCharacters = data.count;
        }
    }, {
        key: 'onGetCharacterCountFail',
        value: function onGetCharacterCountFail(jqXhr) {
            toastr.error(jqXhr.responseJSON.message);
        }
    }]);

    return NavbarStore;
})();

exports['default'] = _alt2['default'].createStore(NavbarStore);
module.exports = exports['default'];

//# sourceMappingURL=NavbarStore-compiled.js.map