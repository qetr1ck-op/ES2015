//Simple function expression with params

'use strict';

var arrowGreeting = function arrowGreeting(name, message) {
    return name + ' ' + message;
}; //Sam Howdy

//Easy array filtering, mapping...

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce(function (a, b) {
    return a + b;
}); // 66
var even = arr.filter(function (v) {
    return v % 2 == 0;
}); // [6, 0, 18]
var double = arr.map(function (v) {
    return v * 2;
}); // [10, 12, 26, 0, 2, 36, 46]

//With constructors

var PersonWithSelf = function PersonWithSelf() {
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

var PersonWithBind = function PersonWithBind() {
    this.age = 0;

    setInterval((function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        console.log(this.age++);
    }).bind(this), 1000);
};

var PersonWithArrow = function PersonWithArrow() {
    var _this = this;

    this.age = 0;

    setInterval(function () {
        console.log(_this.age++); // 'this' properly refers to the person object
    }, 1000);
};

var p1 = new PersonWithSelf();
var p2 = new PersonWithBind();
var p3 = new PersonWithArrow();

//# sourceMappingURL=arrow_functions-compiled.js.map

//# sourceMappingURL=arrow_functions-compiled-compiled.js.map