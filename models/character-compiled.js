/*
* Chris Samuel
* ksamuel.chris@icloud.com
*
*   We will implement the back-end code for adding and saving new characters to the database.
*
*   mongoDB
*   mongoose
*
*   PLEASE MAKE SURE THIS FILE IS IN THE ROOT OF YOUR PROJECT (Near package.json and server.js)
*
* */

//require mongoose
'use strict';

var mongoose = require('mongoose');

//define the schema for our characters database.
var characterSchema = new mongoose.Schema({

    characterId: { type: String, unique: true, index: true },

    name: String,
    race: String,
    gender: String,
    bloodline: String,
    wins: { type: Number, 'default': 0 },
    losses: { type: Number, 'default': 0 },
    reports: { type: Number, 'default': 0 },
    random: { type: [Number], index: '2d' },
    voted: { type: Boolean, 'default': false }

});

module.exports = mongoose.model('Character', characterSchema);

/*what is mongoose schema?
*
* A schema is just a representation of your data in MongoDB. This is where you can enforce a
* certain field to be of particular type. A field can also be required, unique or contain only specified characters.
*
* */

/*
*
*
* */

//# sourceMappingURL=character-compiled.js.map