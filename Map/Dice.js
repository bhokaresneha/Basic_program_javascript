/*
 * Problem Statement=>
                    1. Write a program in the following steps
                        a. Roll a die and find the number between 1 to 6
                        b. Repeat the Die roll and find the result each time
                        c. Store the result in a dictionary
                        d. Repeat till any one of the number has reached 10 times
                        e. Find the number that reached maximum times and the one that was for minimum times
          
*/
console.log("Rolling dice and finding maximum and minimum occured numbers");
///////Step One

let myMap = new Map();
let dicevalue = 0;
let oneCount = 0;
let twoCount = 0;
let threeCount = 0;
let fourCount = 0;
let fiveCount = 0;
let sixCount = 0;

////////Step Two
for(var i = 0;i<=50;i++){
    dicevalue = Math.floor(Math.random() *6)+1;
    myMap.set(i,dicevalue);
    if(dicevalue == 1){
        oneCount++;
        if(oneCount == 10){
            console.log("Number 1 occured 10 times");
            break;
        }
    }
    if(dicevalue == 2){
        twoCount++;
        if(twoCount == 10){
            console.log("Number 2 occured 10 times");
            break;
        }
    }
    if(dicevalue == 3){
        threeCount++;
        if(threeCount == 10){
            console.log("Number 3 occured 10 times");
            break;
        }
    }
    if(dicevalue == 4){
        fourCount++;
        if(fourCount == 10){
            console.log("Number 4 occured 10 times");
            break;
        }
    }
    if(dicevalue == 5){
        fiveCount++;
        if(fiveCount == 10){
            console.log("Number 5 occured 10 times");
            break;
        }
    }
    if(dicevalue == 6){
        sixCount++;
        if(sixCount == 10){
            console.log("Number 6 occured 10 times ");
            break;
        }
    }
}
console.log("Number 1 occure is ",oneCount);
console.log("Number 2 occure is ",twoCount);
console.log("Number 3 occure is ",threeCount);
console.log("Number 4 occure is ",fourCount);
console.log("Number 5 occure is ",fiveCount);
console.log("Number 6 occure is ",sixCount);
/////Step 3
console.log("\n**********<Stored Map values>**********")
for(let [key,value] of myMap) console.log("Values: ",key," = " , value);