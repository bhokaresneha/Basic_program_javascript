/*
 * Problem Statement=>
                       4. Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
                                1. a + b * c        3. c + a / b
                                2. a % b + c        4. a * b + c
OUTPUT=>
                a=>37   b=>80   c=>43
                a + b * c =>3477        a % b + c=>80   c + a / b=>43.4625      a * b + c =>3003
                Finding Minimum...
                minimum result = 43.46
                
                Finding Maximum...
                Maximum result = 3477

 */

//let a =Math.floor(Math.random() * 100);
//let b = Math.floor(Math.random() * 100);
//let c = Math.floor(Math.random() * 100);

const prompts=require("prompt-sync")();
let a = parseInt(prompts("Enter value of a "));
let b = parseInt(prompts("Enter value of b "));
let c = parseInt(prompts("Enter value of c "));




console.log("a=>"+a+"\tb=>"+b+"\tc=>"+c)
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;
console.log("a + b * c =>"+result1+"\ta % b + c=>"+result2+"\tc + a / b=>"+result3+"\ta * b + c =>"+result4)

let minimumResult = 0;
let maximumResult = 0;

console.log("Finding Minimum...");
if (result1 < result2 && result1 < result3 && result1 < result4) {
    minimumResult = result1;
} else if (result2 < result3 && result2 < result4) {
    minimumResult = result2;
} else if (result3 < result4) {
    minimumResult = result3;
} else {
    minimumResult = result4;
}
console.log("minimum result = " + minimumResult);

console.log("\nFinding Maximum...")
if (result1 > result3 && result1 > result4 && result1 > result2) {
    maximumResult = result1;
} else if (result2 > result3 && result2 > result4 ) {
    maximumResult = result2;
} else if (result3 > result4) {
    mmaximumResultax = result3;
} else {
    maximumResult = result4;
}

console.log("Maximum result = " + maximumResult);