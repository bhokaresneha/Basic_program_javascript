/*
 * Problem Statement=>
                        1. Write a program that takes a command-line argument n and prints a table of the powers of 2 
                        that are less than or equal to 2^n.
*/

console.log("Priniting the table of 2 till given power");
let power = 5;
for(let i = 1; i <= power;i++){
    console.log(Math.pow(2,i));
}