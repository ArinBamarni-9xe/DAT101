"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let task1Line = "Line1:!";
for (let i = 1; i <= 10; i++) {
    task1Line += i;
}

printOut(task1Line);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const task2GuessNumber = 45;
let task2RandomNumber = 0;
while (task2RandomNumber !== task2GuessNumber) {
    task2RandomNumber = Math.floor(Math.random() * 60) + 1;
}
printOut("The random number is: " + task2RandomNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const task3GuessNumber = 45;
let task3RandomNumber = 0;
let task3Attempts = 0;
let task3TimeStart = Date.now();
while (task3RandomNumber !== task3GuessNumber) {
    task3RandomNumber = Math.floor(Math.random() * 1000000) + 1;
    task3Attempts++;
}
let task3TimeEnd = Date.now();
let task3TimeTaken = task3TimeEnd - task3TimeStart;
printOut(`The random number is: ${task3RandomNumber}`);
printOut(`Number of attempts: ${task3Attempts}`);
printOut(`Time taken: ${task3TimeTaken} ms`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primes = [];
for (let i = 3; i <= 200; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(i);
    }
}
printOut(`Prime numbers up to 200: ${primes.join(", ")}`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
{
    for (let row = 1; row <= 7; row++) {
        let rowText = "";
        for (let column = 1; column <= 9; column ++) {
            rowText += `${column === 1 ? "": " "} K${column}R${row}`
        }
        printOut(rowText); 
    }
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let student = 1; student <= 5; student++) {
    const points = Math.floor(Math.random() * 236) +1; 
    const percentage = (points / 236) * 100;
    let letterGrade;

    if(percentage >= 89) {
        letterGrade = "A";
    } else if (percentage >= 77) {
        letterGrade= "B"; 
    } else if (percentage >= 65) {
        letterGrade = "C"; 
    } else if (percentage >= 53) {
        letterGrade = "D";
    } else if (percentage >= 41) {
        letterGrade = "E"; 
    } else { 
        letterGrade = "F"; 
     
    }
    printOut(`Student ${student}: ${points}/236 points (${percentage.toFixed(1)}%) - grade ${letterGrade}`); 
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rollDice () {
    return Array.from({ length: 6},() => Math.floor(Math.random()* 6) + 1); 
}
printOut(rollDice()); 
printOut(newLine);


 