/*
* Chris Samuel
* ksamuel.chris@gmail.com
* October 2, 2015
*
* Filename: destructuring assignment
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


// Array Destructuring
//A simple Example


export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
if (require.main === module) {
    let pt = new Point(7,4);
    console.log('My point: ${JSON.stringify(pt)}');
}


// The package babel has many more feature, are all documents on the Babel
//website. For example, from within a normal Node Module, you can install a "require hook"
// which compiles all required modules via Babel (except , by default, modules in node_modules)/

