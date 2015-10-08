'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var HomeActions = (function () {
    function HomeActions() {
        _classCallCheck(this, HomeActions);

        this.generateActions('getTwoCharactersSuccess', 'getTwoCharactersFail', 'voteFail');
    }

    _createClass(HomeActions, [{
        key: 'getTwoCharacters',
        value: function getTwoCharacters() {
            var _this = this;

            $.ajax({ url: '/api/characters' }).done(function (data) {
                _this.actions.getTwoCharactersSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
            });
        }
    }, {
        key: 'vote',
        value: function vote(winner, loser) {
            var _this2 = this;

            $.ajax({
                type: 'PUT',
                url: '/api/characters',
                data: { winner: winner, loser: loser }
            }).done(function () {
                _this2.actions.getTwoCharacters();
            }).fail(function (jqXhr) {
                _this2.actions.voteFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return HomeActions;
})();

exports['default'] = _alt2['default'].createActions(HomeActions);
module.exports = exports['default'];

//# sourceMappingURL=HomeActions-compiled.js.map