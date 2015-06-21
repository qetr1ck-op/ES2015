//http://ilikekillnerds.com/2015/02/a-guide-to-es6-classes/
//http://www.2ality.com/2015/02/es6-classes-final.html

//Classes are syntactical sugar over existing prototyped-based inheritance. The class syntax doesn't introduce new
//object-orient inheritance model to JS. It just provides a much simpler and cleaner way to create object and
//dealing with inheritance.

//Class declaration

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

//need to remember that class declarations are not hoisted
//var p = new Polygon(); reference error
//class Polygon {...}

//Class expression

var Polygon = class {
//or named
//var Polygon = Polygon class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};