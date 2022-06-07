/*
 * Problem Statement=>
                       4. Use Script & Debug – Write a program that reads 5 Random 2 Digit values,then find their sum and the average.
*/

let X=0;
console.log("Random numbers are=>")
for(i=0;i<5;i++)
{
        digit=Math.floor(Math.random()*100);
        console.log(digit);
        X=X+digit

}
let avg=X/5;
//let digit=Math.floor(Math.random()*100);
console.log("SUM of 2 Digit 5 values=>"+X)
console.log("Average of 2 Digit values=>"+avg);
