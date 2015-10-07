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

//# sourceMappingURL=AddCharacterActions-compiled.js.map