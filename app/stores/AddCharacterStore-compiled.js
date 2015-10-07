'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsAddCharacterActions = require('../actions/AddCharacterActions');

var _actionsAddCharacterActions2 = _interopRequireDefault(_actionsAddCharacterActions);

var AddCharacterStore = (function () {
    function AddCharacterStore() {
        _classCallCheck(this, AddCharacterStore);

        this.bindActions(_actionsAddCharacterActions2['default']);
        this.name = '';
        this.gender = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
    }

    _createClass(AddCharacterStore, [{
        key: 'onAddCharacterSuccess',
        value: function onAddCharacterSuccess(successMessage) {
            this.nameValidationState = 'has-success';
            this.helpBlock = successMessage;
        }
    }, {
        key: 'onAddCharacterFail',
        value: function onAddCharacterFail(errorMessage) {
            this.nameValidationState = 'has-error';
            this.helpBlock = errorMessage;
        }
    }, {
        key: 'onUpdateName',
        value: function onUpdateName(event) {
            this.gender = event.target.value;
            this.genderValidationState = '';
        }
    }, {
        key: 'onInvalidGender',
        value: function onInvalidGender() {
            this.genderValidationState = 'has-error';
        }
    }]);

    return AddCharacterStore;
})();

exports['default'] = _alt2['default'].createStore(_actionsAddCharacterActions2['default']);

/*
* nameValidationState and genderValidationState
* refers to the bootstrap validationStates for forms.
*
*helpBlock
*
* is just a status message which gets displayed below the text field
*
* onInvalidName
*
* handler is fired when Character name field is empty.
*
* This is important cause for instance if the name does not exist in EVE Online Database it will be a different error message
* */
module.exports = exports['default'];

//# sourceMappingURL=AddCharacterStore-compiled.js.map