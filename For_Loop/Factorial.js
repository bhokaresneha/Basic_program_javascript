/*
 * Problem Statement=>
                       5. Write a program that computes a factorial of a number taken as input.

                        5 Factorial – 5! = 1 * 2 * 3 * 4 * 5


*/

console.log("Printing factorial of Number")
const prompts=require("prompt-sync")();
const number = parseInt(prompts("Enter no to display Factorial"));
var factorial = 1;
for(var i = 1;i <= number;i++){
    factorial = factorial * i;
}
console.log("Factorial of ",number," is",factorial);




