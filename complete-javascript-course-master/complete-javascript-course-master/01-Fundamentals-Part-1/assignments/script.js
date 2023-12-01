const country = "USA";
const continent = "North America";
let population = 310000000;
console.log(country);
console.log(continent);
console.log(population);

//data types
const isIsland = false;
let language;
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof language);

//Let const var
language = "english";
console.log(population / 2);
population++;
console.log(population);

let popFin = 33000000;
const popAvg = 33000000;
console.log(population > popFin);
console.log(population > popAvg);

let description =
	country +
	" is in " +
	continent +
	" and its " +
	population +
	" people speak " +
	language;

description = `${country} is in ${continent} and its ${population} speak ${language}`;

if (population > 33000000) {
	console.log(`${country}'s population is above average`);
} else {
	console.log(`${country}'s population is below average`);
}

//type conversion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

//Equality Operators
let numNeighbors = Number(
	prompt("How many neighbor countries does your home country have?"),
);

if (numNeighbors === 1) {
	console.log("Only one border!");
} else if (numNeighbors > 1) {
	console.log("More than one border!");
} else {
	console.log("No borders!");
}

//Logical Operators

if (population < 50000000 && language === "english" && numNeighbors > 0) {
	console.log(`You should live in ${country}`);
} else {
	console.log(`${country} doesn't seem to meet your requirements`);
}

switch (language) {
	case "mandarin":
		console.log("Most number of native speakers!");
		break;
	case "spanish":
		console.log("2nd place in number of native speakers");
		break;
	case "english":
		console.log("3rd place");
		break;
	case "hindi":
		console.log("Number 4");
		break;
	case "arabic":
		console.log("5th most spoken language");
		break;
	default:
		console.log("Great language too!");
}

//ternary

population >= 33000000
	? console.log(`${country} population is above average!`)
	: console.log(`${country} population is below average`);
