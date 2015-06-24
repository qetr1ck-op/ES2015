//http://www.2ality.com/2015/02/es6-classes-final.html

//Classes are syntactical sugar over existing prototyped-based inheritance. The class syntax doesn't introduce new
//object-orient inheritance model to JS. It just provides a much simpler and cleaner way to create object and
//dealing with inheritance.

//Class declaration

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}
;

//need to remember that class declarations are not hoisted
//var p = new Animal(); reference error //hoisting is not working:(
//class Animal {...}

//Class expression

/*var Animal = class {
 //or named
 //var Animal = Animal class {
 constructor(name, age) { //there can be only one "constructor" method
 this.name = name;
 this.age = age;
 }
 //...prototype methods
 };*/

//class inheritance

class Rabbit extends Animal {
    constructor(name, age, jumpHeight ) {
        super(name, age);

        this.jumpHeight = jumpHeight || 3;
    }

    //overriding
    getName() {
        var name = super.getName();
        return 'rabbit name is ' + name;
    }

    jump() {
        console.log(super.getName() + ' jumps for ' + this.jumpHeight + ' meters');
    }
}

var rabbit = new Rabbit('Banky', 2);
rabbit.jump(); //Banky jumps for 3 meters

console.log(rabbit instanceof Rabbit); //true
console.log(rabbit instanceof Animal); //true

