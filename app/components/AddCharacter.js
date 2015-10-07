
/*
 * Chris Samuel
 * ksamuel.chris@icloud.com
 *
 * October 1, 2015
 *
 * FileName: server.js
 *
 * Description:
 *
 * This components consists of a simple form with a text field, radio buttons and a submit button .
 * Success and error messages will be displayed within belp-block under the text field.
 *
 *
 *
 *
*/


import React from 'react';
import AddCharacterStore from '../stores/AddCharacterStore';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddCharacterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddCharacterStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddCharacterStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        var name = this.state.name.trim();
        var gender = this.state.gender;

        if (!name) {
            AddCharacterActions.invalidName();
            this.refs.nameTextField.getDOMNode().focus();
        }

        if (!gender) {
            AddCharacterActions.invalidGender();
        }

        if (name && gender) {
            AddCharacterActions.addCharacter(name, gender);
        }
    }


export default AddCharacter;