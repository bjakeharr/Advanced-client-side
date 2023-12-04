"use strict"; //strict mode must be put first

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;

//Functions
// function logger() {
// 	console.log("My name is Jonas.");
// }

// logger();

// function fruitProcessor(apples, oranges) {
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// 	return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//functions assignment

// function describeCountry(country, population, capitalCity) {
// 	const result = `${country} has a population of ${population} people and its capital city is ${capitalCity}`;
// 	return result;
// }
// const country1 = describeCountry("Finland", 6000000, "Helsinki");
// const country2 = describeCountry("Japan", 125000000, "Tokyo");
// const country3 = describeCountry("Ireland", 5033000, "Dublin");

// console.log(country1);
// console.log(country2);
// console.log(country3);

//functions declarations and expressions

//function declaration
// function calcAge1(birthYear) {
// 	return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression
// const calcAge2 = function (birthYear) {
// 	return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// //function declaration and expression assiignment
function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}
// const usaPercentage = percentageOfWorld1(330);
// const irelandPercentage = percentageOfWorld1(5);
// const japanPercentage = percentageOfWorld1(125);
// console.log(usaPercentage, irelandPercentage, japanPercentage);

// const percentageOfWorld2 = function (population) {
// 	return (population / 7900) * 100;
// };
// const usaPercentage2 = percentageOfWorld2(330);
// const irelandPercentage2 = percentageOfWorld2(5);
// const japanPercentage2 = percentageOfWorld2(125);
// console.log(usaPercentage2, irelandPercentage2, japanPercentage2);

// //arrow functions

// //arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2037 - birthYear;
// 	const retirement = 65 - age;
// 	// return retirement;
// 	return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// //arrow functions assignment

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const usaPercentage3 = percentageOfWorld3(330);
// const irelandPercentage3 = percentageOfWorld3(5);
// const japanPercentage3 = percentageOfWorld3(125);
// console.log(usaPercentage3, irelandPercentage3, japanPercentage3);

//calling functions within functions

// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);
// 	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
// 	return juice;
// }

// console.log(fruitProcessor(2, 3));

// // functions in functions assignment

// const describePopulation = (country, population) =>
// 	`${country} has ${population} million people and makes up ${percentageOfWorld1(
// 		population,
// 	)} percent of the world population.`;

// console.log(describePopulation("USA", 330));
// console.log(describePopulation("Ireland", 5));
// console.log(describePopulation("Japan", 125));

//functions review

// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
// 	const age = calcAge(birthYear);
// 	const retirement = 65 - age;
// 	// return retirement;
// 	// return `${firstName} retires in ${retirement} years`;

// 	if (retirement > 0) {
// 		console.log(`${firstName} retires in ${retirement} years`);
// 		return retirement;
// 	} else {
// 		console.log(`${firstName} has already retired.`);
// 		return -1;
// 	}
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Mike"));

//Intro to arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const yy = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtman", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
// 	calcAge(years[0]),
// 	calcAge(years[1]),
// 	calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// //arrays assignment
// const populations = [330, 5, 125, 1170];
// if (populations.length === 4) {
// 	console.log(`populations array contains ${populations.length} variables`);
// }

// const percentages = [
// 	percentageOfWorld1(populations[0]),
// 	percentageOfWorld1(populations[1]),
// 	percentageOfWorld1(populations[2]),
// 	percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// //Array methods
// const friends = ["Michael", "Steven", "Peter"];

// //add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// //remove elements

// friends.pop(); //removes last in array.
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //remove first
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Bob"));
// console.log(friends.includes("STeven"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("Peter")) {
// 	console.log(`You have a friend called Peter`);
// }

//array methods assignment
// const neighbors = new Array("Mexico", "Canada");
// neighbors.push("Utopia");
// console.log(neighbors.length, neighbors);
// neighbors.pop();
// console.log(neighbors.length, neighbors);

// if (!neighbors.includes("Germany")) {
// 	console.log(`Probably not a central European country`);
// }
// neighbors[1] = "Canadia";
// console.log(neighbors);

// //Intro to Objects
// const jonas = {
// 	firstName: "Jonas",
// 	lastName: "Schmedtman",
// 	age: 2037 - 1991,
// 	job: "teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// };

// //Intro to objects assignment

const myCountry = {
	country: "Japan",
	capital: "Tokyo",
	language: "Japanese",
	population: 125,
	neighbors: ["china", "russia"],
};

//dot vs. bracket notation

// const jonas = {
// 	firstName: "Jonas",
// 	lastName: "Schmedtman",
// 	age: 2037 - 1991,
// 	job: "teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas[`first` + nameKey]);
// console.log(jonas[`last` + nameKey]);

// const interestedIn = prompt(
// 	`What do you want to know about Jonas? choose between firstName, lastName, age,  job, and friends`,
// );

// if (jonas[interestedIn]) {
// 	console.log(jonas[`${interestedIn}`]);
// } else {
// 	console.log(
// 		`Wrong request! choose between firstName, lastName, age,  job, and friends.`,
// 	);
// }

// jonas.location = "Portugal";
// jonas["twitter"] = `@jonasschmedtman`;
// console.log(jonas);

// //challenge
// console.log(
// 	`${jonas.firstName} has ${
// 		jonas.friends.length
// 	} friends, and his best friend is called ${
// 		jonas.friends[jonas.friends.indexOf("Michael")]
// 	}.`,
// );

//dots versus brackets assignment

// console.log(
// 	`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}.`,
// );

//object methods

const jonas = {
	firstName: "Jonas",
	lastName: "Schmedtman",
	birthYear: 1991,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
	hasDriversLicense: true,

	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear;
	// },

	// calcAge: function () {
	// 	return 2037 - this.birthYear;
	// },
	calcAge: function () {
		this.age = 2037 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.age}-year old ${this.job}, and ${
			this.hasDriversLicense
				? ` he has a driver's license.`
				: `he does not have a driver's license`
		}`;
	},
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
