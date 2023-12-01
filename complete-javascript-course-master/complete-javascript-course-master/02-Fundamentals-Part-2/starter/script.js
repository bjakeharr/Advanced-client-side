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

function describeCountry(country, population, capitalCity) {
	const result = `${country} has a population of ${population} people and its capital city is ${capitalCity}`;
	return result;
}
const country1 = describeCountry("Finland", 6000000, "Helsinki");
const country2 = describeCountry("Japan", 125000000, "Tokyo");
const country3 = describeCountry("Ireland", 5033000, "Dublin");

console.log(country1);
console.log(country2);
console.log(country3);
