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