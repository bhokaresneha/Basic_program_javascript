/*
 * Problem Statement=>
                       6. Write a program to compute Factors of a number N using prime factorization method.

Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.


*/
n=135;
let c = 2;
    while(1<n)
    {
        if(n % c == 0)
        {
            console.log(c + " ");
            n /= c;
        }
        else c++;
    }