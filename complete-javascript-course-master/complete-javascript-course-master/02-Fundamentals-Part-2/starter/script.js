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

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
}

console.log(fruitProcessor(2, 3));

// functions in functions assignment

const describePopulation = (country, population) =>
	`${country} has ${population} million people and makes up ${percentageOfWorld1(
		population,
	)} percent of the world population.`;

console.log(describePopulation("USA", 330));
console.log(describePopulation("Ireland", 5));
console.log(describePopulation("Japan", 125));
