/*
 * Problem Statement=>
                        3. Write a program that takes a input and determines if the number is a prime.

*/
console.log("Checking the number is prime or not");
let number =50;

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
