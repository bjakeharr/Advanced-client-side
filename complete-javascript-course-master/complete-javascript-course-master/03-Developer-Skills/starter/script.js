// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {
// 	const temps = t1.concat(t2);
// 	let max = temps[0];
// 	let min = temps[0];
// 	for (let i = 0; i < temps.length; i++) {
// 		const curTemp = temps[i];
// 		if (typeof curTemp !== "number") continue;
// 		if (curTemp > max) max = curTemp;
// 		if (curTemp < min) min = curTemp;
// 	}

// 	return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures);
// console.log(amplitudeNew);

// const measureKelvin = function () {
// 	const measurement = {
// 		type: "temp",
// 		unit: "celsius",
// 		value: Number(prompt("degrees celsius")),
// 	};
// };

const printForecast = function (arr) {
	let foreString = "";
	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			foreString += `${arr[i]}°C in ${i + 1} days, `;
		}
		if (i > 0 && i !== arr.length) {
			foreString += `${arr[i]}°C in ${i + 1} days, `;
		}
	}
	return foreString;
};

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

console.log(printForecast(test1));
console.log(printForecast(test2));
