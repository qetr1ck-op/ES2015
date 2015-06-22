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

    getSquare() {
        return this.height * this.width;
    }
};

//need to remember that class declarations are not hoisted
//var p = new Polygon(); reference error //hoisting is not working:(
//class Polygon {...}

//Class expression

/*var Polygon = class {
//or named
//var Polygon = Polygon class {
    constructor(height, width) { //there can be only one "constructor" method
        this.height = height;
        this.width = width;
    }
};*/

//class inheritance

class Area extends Polygon {
    constructor (height, width) {
        super(height, width);
    }

    //overriding
    getSquare() {
        var square = super.getSquare();
        
        return square * 2;
    }

    doSomething() {
        console.log('do something');
    }
}

var area = new Area(10,5);

console.log(area);
