
import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {
    constructor(){
        this.bindActions(FooterActions);
        this.characters = [];
    }
    //Get the Top 5 Characters from array
    onGetTopCharactersSuccess(data){
        this.characters = data.slice(0,5);
    }

    onGetTopCharacterFail(JqXhr){
        //Handle multiple response formats,  fall back to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
 }

export default alt.createStore(FooterStore);

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