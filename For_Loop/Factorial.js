/*
 * Problem Statement=>
                       5. Write a program that computes a factorial of a number taken as input.

                        5 Factorial – 5! = 1 * 2 * 3 * 4 * 5


*/





n=135;
let c = 2;
    while(n > 1)
    {
        if(n % c == 0){
            console.log(c + " ");
            n /= c;
        }
        else c++;
    }