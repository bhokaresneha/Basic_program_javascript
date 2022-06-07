/*
 * Problem Statement=>
                        5. Use Script & Debug – Unit Conversion
                            a. 1ft = 12 in then 42 in = ? ft
                            b. Rectangular Plot of 60 feet x 40 feet in meters
                            c. Calculate area of 25 such plots in acres
*/

console.log("a.INCH TO FEET CONVERSION")
const inches = 42;
let feet=inches/12;
console.log("42 inces =>"+feet+" Feet")

//1 feet =3.28 meter
let meter=3.28;
let Rectangular_Plot=(60/meter)*(40/meter);
console.log((60/meter)+"meters * "+(40/meter)+"meters");
console.log("Area Of Rectangle in Meters"+Rectangular_Plot)


