

import alt from '../alt';
import AddCharacterActions from '../actions/AddCharacterActions';


class AddCharacterStore{
    constructor(){
        this.bindActions(AddCharacterActions);
        this.name = '';
        this.gender = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
    }

    onAddCharacterSuccess(successMessage){
        this.nameValidationState = 'has-success';
        this.helpBlock = successMessage;
    }

    onAddCharacterFail(errorMessage){
        this.nameValidationState = 'has-error';
        this.helpBlock = errorMessage;
    }
    onUpdateName(event){
        this.gender = event.target.value;
        this.genderValidationState = '';
    }
    onInvalidGender(){
        this.genderValidationState = 'has-error';
    }
}


export default alt.createStore(AddCharacterActions);

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