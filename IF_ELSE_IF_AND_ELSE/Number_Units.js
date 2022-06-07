/*
 * Problem Statement=>
                       3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

 */

console.log("Read the number and display number in words");
const ch = process.argv[2];
if(ch == 1){
    console.log("Unit");
}
else if(ch == 10){
    console.log("Ten");
}
else if(ch == 100){
    console.log("Hundred");
}
else if(ch == 100){
    console.log("Thousand");
}
else {
    console.log("Wrong input");
}