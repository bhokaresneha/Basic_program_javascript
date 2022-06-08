/*
 * Problem Statement=>
                        2. Write a program that takes a command-line argument n and prints the nth harmonic number. 

*/

console.log("Printing the Nth Harmonic Number");
const prompts=require("prompt-sync")();
const number = parseInt(prompts("Enter no to display Harmonic Number"));
let harmonicNumbe = 1;
for(i = 1;i<=number;i++){
    harmonicNumbe = (harmonicNumbe + 1 / (i + 1));
}
console.log(harmonicNumbe);