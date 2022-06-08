/*
 * Problem Statement=>
                        1. Read a single digit number and write the number in word using Case

*/


const prompts=require("prompt-sync")();
const number = parseInt(prompts("What is your no?"))
console.log("Printing the given number in words:")
switch (number){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default :
        console.log("Wrong input");                                                                                                                                
}