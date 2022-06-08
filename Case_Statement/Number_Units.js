/*
 * Problem Statement=>
                    3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

*/

console.log("Read the number and display");
const prompts=require("prompt-sync")();
const ch = parseInt(prompts("Enter no to display Unit of that number"));

switch (ch){
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 100:
        console.log("Thousand");
        break;
    default :
        console.log("Wrong input");                                                                               
}