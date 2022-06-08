/*
 * Problem Statement=>
                        2. Read a Number and Display the week day (Sunday, Monday,...)

*/



console.log("Enter number to select Week Day");
const prompts=require("prompt-sync")();
const number =parseInt(prompts("What is your no?"));
//const x= process.argv[2];
//console.log(x)

switch (number){
      case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default :
        console.log("Wrong input");                                                                                                                                
}