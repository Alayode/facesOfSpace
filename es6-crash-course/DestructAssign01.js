/*
 * Chris Samuel
 * ksamuel.chris@gmail.com
 * October 2, 2015
 *
 * Filename: DestructAssign01.js
 *
 * Description
 *
 * The destructuring assignment syntax is a JavaScript expression that makes it possible
 * to extract data from arrays or objects using a syntax that mirrors the construction of array
 * and object literals.
 *
 *
 * More information please visit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 * */


// ECMAScript 6 Features


// Arrows and lexical This


    //Arrows are a function shorthand using  => Syntax. They are syntactically simalar to the related feature in
    // C#, Java 8  and CoffeeScript. They Support both expression and statement bodies. Unlike functions, arrows sharethe same
    // the same lexical this as their surrounding code.



// Expression bodies

    var odds = evens.map(v => v + 1);
    var nums = evens.map(v,i)  => v + i );

// Statement bodies
    nums.forEach(v => {
        if (v % 5 === 0)
        fives.push(v);
    });

//Lexical this

    var bob = {

        _name: "Bob",
        _friends: [],
        printFriends() {
            this.friends.forEach(f =>
            console.log(this._name + "knows" + f));

        }
    };


/**
 * Remember...
 *
 * to run Babel in ECMA5 you have to use the following command
 *
 *  babel-node <filename>
 *
 */


