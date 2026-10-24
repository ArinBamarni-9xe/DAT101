"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printDate() {
	const dateOption = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	}
  const toDay = new Date();
  printOut(toDay.toLocaleString("no-Nb", dateOption));
	return toDay;
} printOut(printDate());  

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calcDaysToGTA(){
	const toDay = printDate();
	const gtaDate = new Date("11/19/2026");
	printOut(gtaDate.toLocaleString("no-Nb"));
	const days = (gtaDate - toDay) / (1000 * 60 * 60 * 24) ;
	printOut(`There is ${Math.floor(days)} days left to GTA - 6 release.`);
}

calcDaysToGTA();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printCircleMeasurements(radius) {
	const diameter = 2 * radius;
	const circumference = 2 * Math.PI * radius;
	const area = Math.PI * radius ** 2;

	printOut(`Diameter: ${diameter}`);
	printOut(`Circumference: ${circumference}`);
	printOut(`Area: ${area}`);
}

printCircleMeasurements(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printRectangleMeasurements(rectangle) {
	const { width, height } = rectangle;
	const circumference = 2 * (width + height);
	const area = width * height;

	printOut(`Circumference: ${circumference}`);
	printOut(`Area: ${area}`);
}

printRectangleMeasurements({ width: 4, height: 6 });

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTemperatureConversions(temperature, temperatureType) {
	if (temperatureType === 1) {
		const fahrenheit = temperature * 9 / 5 + 32;
		const kelvin = temperature + 273.15;
		printOut(`${temperature} Celsius = ${Math.round(fahrenheit)} Fahrenheit, ${Math.round(kelvin)} Kelvin`);
	} else if (temperatureType === 2) {
		const celsius = (temperature - 32) * 5 / 9;
		const kelvin = celsius + 273.15;
		printOut(`${temperature} Fahrenheit = ${Math.round(celsius)} Celsius, ${Math.round(kelvin)} Kelvin`);
	} else if (temperatureType === 3) {
		const celsius = temperature - 273.15;
		const fahrenheit = celsius * 9 / 5 + 32;
		printOut(`${temperature} Kelvin = ${Math.round(celsius)} Celsius, ${Math.round(fahrenheit)} Fahrenheit`);
	} else {
		printOut("Invalid temperature type. Use 1 for Celsius, 2 for Fahrenheit, or 3 for Kelvin.");
	}
}

printTemperatureConversions(25, 1);
printTemperatureConversions(77, 2);
printTemperatureConversions(298, 3);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(grossPrice, vatGroup) {
	const group = vatGroup.toLowerCase();
	let vatRate;

	if (group === "normal") {
		vatRate = 25;
	} else if (group === "food") {
		vatRate = 15;
	} else if (["hotel", "transport", "cinema"].includes(group)) {
		vatRate = 10;
	} else {
		printOut("Unknown VAT group!");
		return NaN;
	}

	return (100 * grossPrice) / (vatRate + 100);
}

printOut(`Normal net price: ${calculateNetPrice(125, "normal")}`);
printOut(`Food net price: ${calculateNetPrice(115, "food")}`);
printOut(`Cinema net price: ${calculateNetPrice(110, "cinema")}`);
printOut(`Unknown group result: ${calculateNetPrice(120, "goblins")}`);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSpeedDistanceTime(speed, distance, time) {
	const isMissing = (value) => value === undefined || value === null;
	const missingCount = [speed, distance, time].filter(isMissing).length;

	if (missingCount !== 1) {
		return NaN;
	}

	if (isMissing(speed)) {
		return distance / time;
	}

	if (isMissing(distance)) {
		return speed * time;
	}

	return distance / speed;
}

printOut(`Speed: ${calculateSpeedDistanceTime(undefined, 100, 20)}`);
printOut(`Distance: ${calculateSpeedDistanceTime(5, undefined, 20)}`);
printOut(`Time: ${calculateSpeedDistanceTime(5, 100, undefined)}`);
printOut(`More than one missing: ${calculateSpeedDistanceTime(undefined, undefined, 20)}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function padText(text, maximumSize, character, insertBefore) {
	if (insertBefore) {
		return text.padStart(maximumSize, character);
	}

	return text.padEnd(maximumSize, character);
}

printOut(padText("DAT101", 10, "*", true));
printOut(padText("DAT101", 10, "*", false));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathsExpression(lineCount) {
	let firstNumber = 1;

	for (let line = 1; line <= lineCount; line++) {
		let leftSum = 0;
		let rightSum = 0;
		const leftValues = [];
		const rightValues = [];

		for (let count = 0; count <= line; count++) {
			leftSum += firstNumber;
			leftValues.push(firstNumber);
			firstNumber++;
		}

		for (let count = 0; count < line; count++) {
			rightSum += firstNumber;
			rightValues.push(firstNumber);
			firstNumber++;
		}

		if (leftSum !== rightSum) {
			printOut(`Line ${line} is not equal: ${leftValues.join(" + ")} = ${leftSum}; ${rightValues.join(" + ")} = ${rightSum}`);
			return;
		}
	}

	printOut("Maths fun!");
}

testMathsExpression(200);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(number) {
	if (number < 0 || !Number.isInteger(number)) {
		return NaN;
	}

	if (number === 0 || number === 1) {
		return 1;
	}

	return number * factorial(number - 1);
}

printOut(`Factorial of 5: ${factorial(5)}`);

printOut(newLine);
