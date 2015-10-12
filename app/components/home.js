import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from  '../actions/HomeActions';
import {first,without,findWhere} from 'underscore';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state= HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div className='alert alert-info'>
                Hello from Home Component
            </div>
        );
    }
}

export default Home;
