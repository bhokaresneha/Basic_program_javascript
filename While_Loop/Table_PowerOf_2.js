/*
 * Problem Statement=>
                      1. Write a program that takes a command-line argument n and prints a
                    table of the powers of 2 that are less than or equal to 2^n till 256 is reached..


*/


console.log("Priniting the table of 2 till given power");

let temp;
let i = 1;
while(temp != 256)
{
    temp = Math.pow(2,i);
    console.log(temp);
    i++;
}
