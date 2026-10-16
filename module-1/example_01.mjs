"use strict"
import { printOut } from "../../common/script/utils.mjs";
// 50 gjester hver gang. Mellom 20-40 år. 


const guests = []; 
for (let i = 0; i < 50; i++) {
    const age = Math.floor(Math.random() * 21) + 20; 
    guests.push(age); 
}
printOut(guests);

const cars = "AUDI,BMW,FIAT,VOLVO,SAAB,SKODA";
let text = "";
for (let i = 0 ; i < cars.length; i++) {
    text += cars[i]; 
}
printOut(text);

let task1Line = "Line1:!";
let task1Line2 = "Line2:!"; 
let task1Line3 = "Line3:!";
for (let i = 1, j = 15, k = 150; i <= 15; i++, j--, k=k - 10) {
    task1Line += i; 
    task1Line2 += j; 
    task1Line3 += k + ".";
}
printOut(task1Line);
printOut(task1Line2);
printOut(task1Line3);