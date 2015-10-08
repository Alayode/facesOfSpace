'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var HomeStore = (function () {
    function HomeStore() {
        _classCallCheck(this, HomeStore);

        this.bindActions(_actionsHomeActions2['default']);
        this.characters = [];
    }

    _createClass(HomeStore, [{
        key: 'onGetTwoCharactersSuccess',
        value: function onGetTwoCharactersSuccess(data) {
            this.characters = data;
        }
    }, {
        key: 'onGetTwoCharactersFail',
        value: function onGetTwoCharactersFail(errorMessage) {
            toastr.error(errorMessage);
        }
    }, {
        key: 'onVoteFail',
        value: function onVoteFail(errorMessage) {
            toastr.error(errorMessage);
        }
    }]);

    return HomeStore;
})();

exports['default'] = _alt2['default'].createStore(HomeStore);
module.exports = exports['default'];

//# sourceMappingURL=HomeStore-compiled.js.map