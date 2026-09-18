"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

const eqsn = "2 + 3 * 2 - 4 * 6";
const eqsninpt = 2 + 3 * (2 - 4) * 6;
const eqsnoutp = 2 + 3 * (2 - 4) * 6;
printOut(eqsn);
printOut(eqsninpt);
printOut(eqsnoutp);





printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const oneInch = 25.4 // millimeters
const metersInMillimeters= 25.4 * 1000;
const centimetersInMillimeters = 34*10;
const millimeters = metersInMillimeters + centimetersInMillimeters;
const inches = millimeters / oneInch;
printOut (`25 meters = ${inches.toFixed(2)} inches`);




printOut (newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
"Convert everything into minutes (3 days 12 hours 14 minutes and 45 seconds)" 
const day= 60 * 24; 
const hour= 60;
const minute= 1;
const seconds = 1 / 60;
const totalminutes = (3 * day) + (12 * hour) + (14 * minute) + (45 * seconds);
printOut (`Total minutes in 3 days, 12 hours, 14 minutes and 45 seconds = ${totalminutes} minutes`);




printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
"Convert 6,322.52 minutes to days, hours, minutes, and seconds."
const minutesInDay = 60 * 24;
const minutesInhour = 60;
const minutesInMinute = 1; 
const minutesInSeconds = 1/60;
const totalDays = Math.floor(6322.52 / minutesInDay);
const totalHours = Math.floor((6322.52 % minutesInDay) / minutesInhour);
const totalMinutes = Math.floor((6322.52 % minutesInhour) / minutesInMinute);
const totalSeconds = Math.round((6322.52 % minutesInMinute) / minutesInSeconds);
printOut (`Total time in 6,322.52 minutes = ${totalDays} days, ${totalHours} hours, ${totalMinutes} minutes, and ${totalSeconds} seconds`);





printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
"Convert 54 USD to NOK. Do from USD/NOK and NOK/USD. Use the exchange rate of 76NOK = 8.6USD."
const USDinNokrate =  (76 / 8.6);
const NOKinUSDrate = (8.6 / 76);
const USDinNOKamount = Math.round ( 54 * USDinNokrate);
const NOKinUSDamount = Math.round (USDinNOKamount / NOKinUSDrate);
printOut (`54 Dollars is ${USDinNOKamount}`);
printOut (`${USDinNOKamount}Kroner is 54 dollars`); 





printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = (`There is much between heaven and earth that we do not understand.`);
printOut (text); 

let CharAmount = text.length;
printOut (`Character amount is ${CharAmount}`); 

CharAmount = text.charAt(19); 
printOut (`Character 19 is ${CharAmount}`);

CharAmount = text.substring (35, 35 +8); 
printOut (`From character number 35 and 8 forward says ${CharAmount} `);

CharAmount = text.indexOf("earth"); 
printOut (`earth starts at pos ${CharAmount}`);







printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let compare = 5 > 3; 
printOut (`Is 5 greater than 3? ${compare}`); 
compare = 7 >= 7; 
printOut (`Is 7 greater than or equal to 7? ${compare}`); 
compare = "a" > "b"; 
printOut (`Is "a" greater than "b"? ${compare}`); 
compare = "1" <= "a"; 
printOut (`Is "1" less than "a" ${compare}`); 
compare = "2500" <= "abcd"; 
printOut (`is "2500" less than "abcd"`); 
compare = "arne" !== "thomas"; 
printOut (`Is "arne" not equal to "thomas" ${compare}`); 
compare = 2 === 5; 
printOut (`Is 2 equals 5? ${compare}`); 






printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let NumbConvert = parseInt ("254");
printOut (`From text "254" to a number ${NumbConvert}`); 

NumbConvert = parseFloat ("57.23"); 
printOut (`Convert text "57.23" to a number : ${NumbConvert}`); 

NumbConvert = Number ("25 kroner"); 
printOut (`Convert text "25 kroner" to a number: ${NumbConvert}`); 




printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ // 
let r = Math.ceil(Math.random()*360);
printOut (`Randomly generated number r: ${r} with Math.ceil()`); 

r= Math.random (Math.floor()*360) +1; 
printOut (`Randomly generated number ${r} with Math.floor()`); 


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const pt10day = 1;
const pt10week= pt10day * 7 ;

const pt10ModuleWeeks = Math.floor (131/pt10week); 
const pt10Moduledays = Math.floor ((131%pt10week) / pt10day); 
printOut (`Total weeks in 131 days are ${pt10ModuleWeeks} and ${pt10Moduledays} days`); 



printOut(newLine);