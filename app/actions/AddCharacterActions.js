import alt from  '../alt';

class AddCharacterActions{
    constructor() {
        this.generateActions(
            'addCharacterSuccess',
            'addCharacterFail',
            'updateName',
            'updateGender',
            'invalidName',
            'invalidGender'
        );
    }

    //create addCharacter function that does an POST ajax call.

    addCharacter(name,gender){
        $.ajax({
            url:'/api/characters',
            data:{
                name:name,
                gender:gender
            }
        })
        .done((data) => {
            this.actions.addCharacterSuccess(data.message);
        })
    }


}