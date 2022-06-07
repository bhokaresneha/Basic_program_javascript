/*
 * Problem Statement=>
                     3. Take a number from user and check if the number is a Prime then show that its palindrome is also prime
                            a. Write function check if number is Prime
                            b. Write function to get the Palindrome.
                            c. Check if the Palindrome number is also prime
Series of PrimePAlindrome no=>2, 3, 5, 7, 11, 101, 131, 151, 181, 191, 313, 353, 373, 383, 727, 757, 787, 797, 919, 929
*/



console.log("Prime Palindrome Program");
let number = 2;
let count = 0;
let sum = 0;
let temp = number;
prime(number);
palindrome(number);
primePalindrome();

function prime(){

    for (let i = 1;i <= number;i++){
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
}

function palindrome(){
    let r;

    while(number > 0){
        r = number % 10; 
        console.log("Remainder=>"+r)
        number = parseInt(number / 10); 
        sum = (sum * 10) + r;        
    }
    if(sum == temp){
        console.log("The given number is palindrome")
    }
    else{
        console.log("The given number is not a Palindrome")
    }
}

function primePalindrome(){
    if(count ==2 && sum == temp){
        console.log("The given number is Palindrome and also Prime");
    }
    else if(count ==2 ){
        console.log("The given number is Prime Not Palindrome ");
    }else
    {
        console.log("The given number is not  Prime and  Palindrome ");

    }
}