'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsFooterActions = require('../actions/FooterActions');

var _actionsFooterActions2 = _interopRequireDefault(_actionsFooterActions);

var FooterStore = (function () {
    function FooterStore() {
        _classCallCheck(this, FooterStore);

        this.bindActions(_actionsFooterActions2['default']);
        this.characters = [];
    }

    //Get the Top 5 Characters from array

    _createClass(FooterStore, [{
        key: 'onGetTopCharactersSuccess',
        value: function onGetTopCharactersSuccess(data) {
            this.characters = data.slice(0, 5);
        }
    }, {
        key: 'onGetTopCharacterFail',
        value: function onGetTopCharacterFail(JqXhr) {
            //Handle multiple response formats,  fall back to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }]);

    return FooterStore;
})();

exports['default'] = _alt2['default'].createStore(FooterStore);

/*
*   Purpose of this document.
*
*   All instance variables of the store (i.e. value assigned to this , will become part of the state.)
*   When footer component initially calls the Footer.getState() it receives the current state of the store
*   specified in the constructor
*
*
*
* */
module.exports = exports['default'];

//# sourceMappingURL=FooterStore-compiled.js.map