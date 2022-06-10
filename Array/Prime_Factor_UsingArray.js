
/*
 * Problem Statement=>
          
 3. Extend the Prime Factorization Program to store all the Prime Factors of a
        number n into an array and finally display the output.
*/



const prompts=require("prompt-sync")();
let n = parseInt(prompts("Enter no to display Factors "));
let c = 2;
let primeArray=Array();
    while(1<n)
    {
        if(n % c == 0)
        {
            primeArray.push(c);
            
            
            n /= c;
        }
        else c++;
    }
    console.log( "Prime Factores are "+primeArray );