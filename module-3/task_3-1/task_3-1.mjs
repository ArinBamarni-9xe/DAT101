"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeup1 = 8
if (wakeup1 == 7)
{
    printOut (`I can catch the bus to school`); 
} else if (wakeup1 == 8) {
    printOut (`I can take the train to school`);
 } else {
    printOut (`You must take the car to school`);
}






printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let Numberselect = 10
if (Numberselect < 0 ){
    printOut(`Negative`); 
} else if (Numberselect > 0) { 
    printOut(`Positive`); 
} else {
    printOut(`Zero`); 
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let Imagesize1 = Math.floor(Math.random()*8)+1
printOut(Imagesize1);
if (Imagesize1 >=4) {
    printOut(`Thank you)`); 
} else {
    printOut(`The image is too small`);
}




printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let Imagesize = Math.floor(Math.random()* 8)+1
printOut(Imagesize);
if (Imagesize >= 6) {
     printOut(`Image size is too large`); 
} else if  (Imagesize >= 4) {
    printOut(`Thank you`); 
} else {
    printOut(`The image is too small`);
} 


printOut(newLine);

printOut("--- Part 8, 9  ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Juni", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
let monthNamedays
if (monthName.toLowerCase().includes("r")) {
    printOut(`${monthName} You must take vitamine D`);
} else {
    printOut(`${monthName} You do not need to take`); 
}
switch (monthName) {
    case"January":
    case "Mars": 
    case "Mai":
    case "Juli":
    case "August":
    case "Oktober":
    case "Desember": 
    printOut("There are 31 days in this month");
    break;
    case "February":
    printOut("There are 28 days in this month"); 
    break; 
    default: 
    printOut("There are 30 days in this month");

}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "Mars"|| (monthName === "Mai")) {
    printOut("Sorry, the gallery is closed")
} else if (monthName === "Arpil"){
    printOut("Sorry, main gallery is closed, you are welcome into the premesiss next door!")
} else {
    printOut("Welcome to my gallery")
}
printOut(newLine);
