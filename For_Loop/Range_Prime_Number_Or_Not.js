/*
 * Problem Statement=>
                        4. Extend the program to take a range of number as input and output the Prime


*/
console.log("Checking the number is prime or not");
const prompts=require("prompt-sync")();
let number = parseInt(prompts("Enter no to display prime numbers between 0 to given no "));

for(let j = 1; j<= number;j++){
    let count = 0;
    for (let i = 1;i <= j;i++){
        if (j % i == 0){
            count = count + 1;      
        }
    }
    if(count == 2){
        console.log(j," is a Prime Number");
    }
}
