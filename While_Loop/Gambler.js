/*
 * Problem Statement=>
                     4. Write a Program where a gambler starts with Rs 100 and places Re 1 bet
                        until he/she goes broke i.e. no more money to gamble or reaches the
                        goal of Rs 200. Keeps track of number of times won and number of bets made.


*/


let start_with = 100;
let bet = 0;
let goal = 200;
let number_of_Times = 0;
let temp = start_with;
let win = 0;
let lose = 0;

while(temp != 0 && temp != goal){
    if (temp != 0) {
        if (win != goal) {
            if (Math.random() > 0.5) {
                temp++;
                win++;
            } else {
                temp--;
                lose++;
            }
        } else {
            console.log("You won the game goal.....");
            break;
        }
    } else {
        console.log("You lose the Game");
    }
}
console.log("Number of times Win: ",win);
console.log("Number of Times bet: ",win+lose);


