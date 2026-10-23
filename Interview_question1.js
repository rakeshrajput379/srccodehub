// today we see the diffrence between var, let and const in javascript

let a = 10; // let is block scoped
var b = 20; // var is function scoped
const c = 30; // const is block scoped and cannot be reassigned


// Example of var
function varExample() {
    if (true) { 
        var x = 50; // x is accessible outside the if block
    }

 console.log(x); // Output: 50
}

// Example of let
function letExample() {
    if (true) {
        let y = 60; // y is not accessible outside the if block
    }
    console.log(y); // Output: ReferenceError: y is not defined

}

// Example of const
function constExample() {
    const z = 70; // z cannot be reassigned
    // z = 80; // This will throw an error: TypeError: Assignment to constant variable.
    console.log(z); // Output: 70
}

// you can call these functions to see the behavior of var, let, and const in JavaScript.

//Thanks for watching this video, if you like it please subscribe to my channel and hit the bell icon to get notified about my new videos.