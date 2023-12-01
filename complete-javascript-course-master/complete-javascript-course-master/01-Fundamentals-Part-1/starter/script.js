/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtman";
console.log(lastName);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 **3 equals 2*2*2

const firstName = "Jonas";
const lastName = "Schmedtman";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
	"I'm" + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log(`String
with
multiple
lines`);


const age = 15;

if (age >= 18) {
	console.log(`Sarah can start driving license 🚗`);
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
	let century = 20;
} else {
	let century = 21;
}

console.log(century);

//Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof Nan);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old.");
console.log("I am" + " 23 " + "years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


//Truthy Falsy

// 5 falsy values 0,'',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
	console.log("Don't spend it all");
} else {
	console.log("You should get a job");
}

let height = 123;
if (height) {
	console.log("height is defined");
} else {
	console.log("height is undefined");
}


//Equality operators

const age = 18;
if (age === 18) console.log("welcome to adulthood");
if (age == 18) console.log("welcome to adulthood");

const favorite = Number(prompt("What is your favorite number?"));
console.log(typeof favorite);

if (favorite === 23) {
	console.log("Cool 23 is an amazing number");
} else if (favorite === 7) {
	console.log("Seven is also a cool number");
} else if (favorite === 9) {
	console.log("Nine is also cool");
} else {
	console.log("Number is not 23, 7, or 9");
}

if (favorite !== 23) console.log("Why not 23?");


//Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
// 	console.log("Sarah is able to drive.");
// } else {
// 	console.log("Someone else should drive");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log("Sarah is able to drive.");
} else {
	console.log("Someone else should drive");
}
*/

// The switch statement

const day = "monday";

switch (day) {
	case "monday":
		console.log("Plan course structure");
		console.log("Go to coding meetup");
		break;
	case "tuesday":
		console.log("prepare theory videos");
		break;
	case "wednesday":
	case "thursday":
		console.log("Write code examples");
		break;
	case "friday":
		console.log("Record videos");
		break;
	case "saturday":
	case "sunday":
		console.log("Enjoy the weekend");
		break;
	default:
		console.log("not a valid day");
}

if (day === "monday") {
	console.log("Plan course structure");
	console.log("Go to coding meetup");
} else if (day === "tuesday") {
	console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
	console.log("Write code examples");
} else if (day === "friday") {
	console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
	console.log("Enjoy the weekend");
} else {
	console.log("not a valid day");
}
