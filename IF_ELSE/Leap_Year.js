/*
 * Problem Statement=>
                         3. Write a program that takes a year as input and outputs the Year is a Leap Year or not
                        a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
 */
//const x=process.argv;
//console.log(x);
//const year = process.argv[2];

const prompts=require("prompt-sync")();
let year=parseInt(prompts("Enter Year To check Leap Year Or Not=>"));

if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
{
    console.log(year+"\t=> is Leap Year");
}
else{
    console.log(year+"\t=> is Not a Leap Year");

}