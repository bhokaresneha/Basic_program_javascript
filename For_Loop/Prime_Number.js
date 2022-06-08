/*
 * Problem Statement=>
                     3. Write a program that takes a input and determines if the number is a prime.

*/
const prompts=require("prompt-sync")();
let number = parseInt(prompts("Enter no to display number is prime or not "));

let count=0; 
for (var i = 1;i <= number;i++){
    if (number % i == 0){
        count = count + 1;      
    }
}
if(count == 2){
    console.log(number," is a Prime Number");
}
else{
    console.log(number," is not a prime number");
}