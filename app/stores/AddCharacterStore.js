

import alt from '../alt';
import AddCharacterActions from '../actionsAddCharacterActions';


class AddCharacterStore{
    constructor(){
        this.bindActions(AddCharacterActions);
        this.name = '';
        this.gender = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
    }

}