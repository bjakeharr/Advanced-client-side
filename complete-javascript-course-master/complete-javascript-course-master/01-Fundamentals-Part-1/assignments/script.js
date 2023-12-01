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
