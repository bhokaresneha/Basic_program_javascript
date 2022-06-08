/*
 * Problem Statement=>
                       3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

 */

console.log("Read the number and display units of number ");
//const ch = process.argv[2];
const prompts=require("prompt-sync")();
const ch = prompts("which unit you want to display Choices=>1,10,100,1000")


if(ch == 1){
    console.log("Unit");
}
else if(ch == 10){
    console.log("Ten");
}
else if(ch == 100){
    console.log("Hundred");
}
else if(ch == 1000){
    console.log("Thousand");
}
else {
    console.log("Wrong input");
}