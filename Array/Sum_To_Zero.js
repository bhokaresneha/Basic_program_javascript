/*
 * Problem Statement=>
                        4. Write a Program to show Sum of three Integer adds to ZERO
    Assumed=>
    0, -1, 2, -3, 1
    o/p=>       0 -1 1
                2 -3 1
*/



const prompts=require("prompt-sync")();

const number = parseInt(prompts("enter no of elements want to perform addition "));
let element;
let arr=Array();
let n;
if(number>=3)
{   n=number;
    for(i=0;i<number;i++)
    {
        element = parseInt(prompts("Enter no to perform addition "));
        arr.push(element);
    }
    addition();
}
else{
    console.log("Minimum 3 numbers are required to perfrom operation");
}
function addition()
{
        let found = false;
        for ( i = 0; i < n - 2; i++) {
            for (j = i + 1; j < n - 1; j++) {
                for ( k = j + 1; k < n; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        console.log("triplet with 0 sum found in array"+arr[i] + " " + arr[j] + " " + arr[k]);
                        found = true;
                    }
                }
            }
        }
         // If no triplet with 0 sum found in array
        if (found == false)
            console.log(" triplet with 0 sum not found in array ");
}