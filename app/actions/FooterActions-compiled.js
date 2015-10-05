'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var FooterActions = (function () {
    function FooterActions() {
        _classCallCheck(this, FooterActions);

        this.generateActions('getTopCharactersSuccess', 'getTopCharactersFail');
    }

    _createClass(FooterActions, [{
        key: 'getTopCharacters',
        value: function getTopCharacters() {
            var _this = this;

            $.ajax({ url: '/api/characters/top' }).done(function (data) {
                _this.actions.getTopCharactersSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getTopCharactersFail(jqXhr);
            });
        }
    }]);

    return FooterActions;
})();

exports['default'] = _alt2['default'].createActions(FooterActions);
module.exports = exports['default'];

//# sourceMappingURL=FooterActions-compiled.js.map