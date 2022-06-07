/*
 * Problem Statement=>
                    3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

*/

console.log("Read the number and display");
let number = [1,10,100,1000];
console.log("Enter array index to display number in words");
let ch = 2;

switch (ch){
    case 0:
        console.log("Unit");
        break;
    case 1:
        console.log("Ten");
        break;
    case 2:
        console.log("Hundred");
        break;
    case 3:
        console.log("Thousand");
        break;
    default :
        console.log("Wrong input");                                                                               
}