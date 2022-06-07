/*
 * Problem Statement=>
                        1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value.
*/

console.log("\n5 random 2 digit numbers Min and Max:");
let arr = [];
let max = 999;
let min = 100;
let temp=0;

while(arr.length < 5)
{
    let number1 = number = Math.floor(Math.random() * (max - min + 1) + min);
    arr.push(number1);
}

console.log("numbers ",arr);   

       //Loop through the array
        for ( i = 0; i < arr.length; i++) 
        {
            for(j=i+1;j<arr.length;j++)
            {
                 //Compare elements of array with max
                 if(arr[i] > arr[j])
                 {
                    temp=arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;

                 }
                    
            }
             
        }
       
console.log("sort ",arr);
console.log("Minimum number = ",arr[0]);
console.log("Maximum number = ",arr[arr.length-1]);