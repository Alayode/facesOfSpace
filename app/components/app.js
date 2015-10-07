/*
* Chris Samuel
* ksamuel.chris@gmail.com
*
* October 2 2015
*
*
*
* */


import React from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <RouteHandler  />
                <Footer />
            </div>
            );
    }
}


export default App;



/*
* Routehandler is a component that renders the active child route handler.
* It will render one of the following components depending on the URL path:
* Home,Top 100, Profile or Add Character.
*
*       AngularJS Equivalent : <div ng-view></div>
 *              Which includes the rendered template of current route
*               into the main layout.
 *
  * */


