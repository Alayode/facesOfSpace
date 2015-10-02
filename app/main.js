
/*
* Chris Samuel
* ksamuel.chris@gmail.com
*
* fileName : main.js
*
* The main.js is the entry point for our React application. We use it in gulpfile.js where Browserify will traverse the entire
* tree of dependencies and generate the final bundle.js file. You will rarely have to touch this file after its initial setup.
*
* */



import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});


//File Breakdown

/*
*HistoryLocation
*   to enable HTML5 History API in order to make URLs look pretty. For example, it navigates to http://localhost:3000/add instead of http://localhost:3000/#add. Since we are building an Isomorphic React application (rendered on the server and the client) we do not have to do any hacky
*   wildcard redirects
 *
 *
 *
 *  on the server to enable this support. It just works out of the box.
*
*
* */