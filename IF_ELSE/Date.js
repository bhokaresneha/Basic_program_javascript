/*
 * Problem Statement=>
                        2. Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, 
                        false otherwise.
*/

//const day = process.argv[2];
//const month = process.argv[3];
const prompts=require("prompt-sync")();
let day=parseInt(prompts("Enter Day=>"));
let month=parseInt(prompts("Enter month=>"));

console.log("Date=>"+day+"\tMonth=>"+month)

if(( month >= 3 && month <= 6 ))
{
    if(( month == 3 && day <= 20 || month == 6 && day >= 20 ))
    {
        console.log("false");
    }
    else{
        console.log("true");
    }
}
    
    

