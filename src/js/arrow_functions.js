//An arrow function expression has a shorter syntax than function expressions
//and lexically bind "this". Arrow function are always anonymous.

//Simple function expression with params

const arrowGreeting = (name, message) => name + ' ' + message;

//Easy array filtering, mapping...

const arr = [5, 6, 13, 0, 1, 18, 27];
const sum = arr.reduce((a, b) => a + b);  // 66
const even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
const double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]

//With constructors

const PersonWithSelf = function() {
    var self = this; // save 'this' as link.

    self.age = 0;

    setInterval(function growUp() {
        // In nonstrict mode, the growUp() function defines `this`
        // as the global object,
        // or 'strict mode' defines as undefined
        // which is different from the `this`
        // defined by the Person() constructor.

        // The callback refers to the closure `self`
        console.log(self.age++);
    }, 1000);
};

const PersonWithBind = function() {
    this.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        console.log(this.age++);
    }.bind(this), 1000);
};

const PersonWithArrow = function() {
    this.age = 0;

    setInterval(() => {
        console.log(this.age++); // 'this' properly refers to the person object
    }, 1000);
};

var p1 = new PersonWithSelf();
var p2 = new PersonWithBind();
var p3 = new PersonWithArrow();
