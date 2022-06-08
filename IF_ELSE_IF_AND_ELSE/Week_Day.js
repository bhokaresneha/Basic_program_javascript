/*
 * Problem Statement=>
                       2. Read a Number and Display the week day (Sunday, Monday,...)

 */


console.log("Enter number to select Week Day");
//const x=process.argv;
//console.log(x);
//const number = process.argv[2];
const prompts=require("prompt-sync")();
const number = prompts("Enter no which day want to display")

if(number == 1){
    console.log("Sunday");
}
else if(number == 2){
    console.log("Monday");
}
else if(number == 3){
    console.log("Tuesday");
}
else if(number == 4){
    console.log("Wednesday");
}
else if(number == 5){
    console.log("Thursday");
}
else if(number == 6){
    console.log("Friday");
}
else if(number == 7){
    console.log("Saturday");
}
else {
    console.log("Wrong input");
}