'use strict';
//notes will be on the code

//high level - the developer does not have to manage computer resources. limits optimization but less stressful
//garbage collected - cleans up the memory not in use automatically
//interpreted or just in time compiled- interprets human readable codde to machine code within the javascript engine itself.
//multi-paradigm - supports multiple programming approaches procedural vs object oriented
//prototyped based object oriented- almost everything in js is an object 
//first class functions- functions are treated as variables which means they can be passed within other functions.
//dynamic - data types are automatically assigned instead of explicitly defined for a variable
//single-threaded - javascript can only run one thing at a time
//non-blocking behavior- uses an event loop to run long running tasks in the background, suspends them when needed then moves them back to the front of the line when needed.


//the javascript engine and runtime

//js-engine- program that executes the js code
    //each browser has its own JS engine

//compiled languages convert the entire code to machine readable at once and store in binary file that can then be executed by machine
//interpreted languages runs the source code and translates to machine readable line by line which can be rather slow.
//modern JS uses just in time compilation(JIT) converts all the code to machine readfable at once then immediately executes instead of storing in a binary file to be used later.

//runtime breakdown

//global execution context- grabs all the variables and their definitions that are not contained INSIDE functions
//global execution context is then loaded into the JS engine call stack bottom visually
//when the execution of the GEC encounters a function call, it will crate a new execution context EC for that individual function.
//the new EC is loaded on top of the GEC in the call stack and executed. 
//once an EC has run its course (and that can be multiple layers deep calling on other functions) the current EC has been executed and is removed from the callstack
//assuming there are no further ECs the call stack will remain on the original GEC until the session is closed or another EC is created .


//scope in the Execution context
//execution contexts have their own subsets of data within them
//-scoping- controls how the EC variables are organized and accessed. like an address book for the defined variables. Also determines where the EC can and cannot access a variable ie a variable in another function.
//  three types of scope in JS global, function, and block scope.

//global scope- outside of any function or block.  accessible anywhere in the code
//function scope- variables are only accessible within the function in which they are declared and cannot be accessed from outside the function. Also called local scope.
//block scope - variables accessible only INSIDE block {} only applies to let and const variables.

//scoping lecture coding

// function calcAge(birthYear) {
//     const age = 2037-birthYear;
//     function printAge(){
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear>= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // creating NEW variable with same namae as outer scope variable

//             //reassigning outer variable
//             output= `new output`;

//             const firstName = `Steven`;
//             const str = `Oh, and you are a millenial ${firstName}`;
//             console.log(str);

//             function add(a,b){
//                 return a+b;
//             }
//         }

       
//         // console.log(millenial)
        
//     }
//     printAge();
// }

// const firstName = 'Jonas';
// calcAge(1991);

//hoisting notes
//hoisting makes some types of variables available in the code before they are actually defined "lifted to the top of their scope"
//during the scanning phase of the EC the code is searched for variable declarations that are then plugged in ahead of their actual place in the code
//let and const variables are not hoisted at all they come backa s undefined 

//hositing and tdz practice

//hoisting using var to create undefined
// console.log(me);

// console.log(job);
// console.log(year);

// var me = `Jonas`;
// let job = `teacher`;
// const year = 1991;

// //functions
// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// function addDecl(a,b) {

//     return a+b;
// }

// const addExpr = function (a,b) {
//     return a+b;
// }

// const addArrow = (a,b) => a+b;

//example
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart(){
//     console.log(`all produccts deleted`);
// }

// var x = 1;
// let y=2;
// const z=3;

//"this" keyword notes

//special variable that is created for every execution context
//points to the 'owner' function
//value is assigned when called

//'this' keyword coding practice

// console.log(this); //the global window object

// const calcAge = function(birthYear){
//     console.log(2037-birthYear);
//     console.log(this); //comes back as undefined in 'strict mode' within a function
// }

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037-birthYear);
//     console.log(this); //when used in an arrow function, this returns as the global window object
// }
// calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this); //when used within an object, 'this' will refer to the object it is called by
//     },
// };
// jonas.calcAge();

// const matilda = {
//     year : 2017,
// };

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();
// const f = jonas.calcAge;
// f();


//regular functions versus arow functions 

const jonas = {
        year: 1991,
        firstName: 'Jonas',
        calcAge: function () {
            console.log(this); //when used within an object, 'this' will refer to the object it is called by
        },
        greet: () => console.log(`Hey ${this.firstName}`), //since 'this' is being called using an arrow function, even though its being called by an object, it will still refer back to the global window and be 'undefined'
    };

    jonas.greet();