/*
 * Problem Statement=>
                     3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.
            ASSUMED=>  Head=0 AND tail=1
*/


console.log("Flip the coin")
let win = 0;
let  headCount = 0;
let tailCount = 0;
while(win != 11){
    let flipcoin = Math.floor((Math.random())*2);
    if(flipcoin ==0 ){
        console.log("Head");
        headCount++;
        if(headCount==11){
            console.log("\n HEAD Wins!!!")
            win = headCount;
        }
    }
    else{
        console.log("Tail");
        tailCount++;
        if(tailCount==11){
            console.log("\n TAIL Wins!!!")
            win = tailCount;
        }
    }
    
}
