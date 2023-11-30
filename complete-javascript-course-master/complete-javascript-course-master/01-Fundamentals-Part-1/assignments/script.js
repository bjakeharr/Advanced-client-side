const country = "USA";
const continent = "North America";
let population = 331000000;
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
language = "English";
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
