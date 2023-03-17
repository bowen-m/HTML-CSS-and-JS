/**
 * Arithmetic + - * / %
 * Assignment =.  += , -= , *= , /=
 * Comparison (return a boolean)==, ===, !=, !==, >, <, >=,<=
 * Logical Operators &&(AND), ||(OR) , !(NOT)
 * Unary --, ++
 * Ternary/Conditional Operator condition? trueValue:falseValue
 */
console.log(17 % 2); //check if a number is even
console.log(177 % 10) //check if a number is a multiple of ten
let age = 30 //Assignment
console.log(age);
//age += 10;   //Adds 10 to previous value of age
age = age + 10;  //Adds 10 to previous value of age
console.log(age);
let num = 5;
num *= 3; // multiplies the previous value of num by 3
console.log(num);

//Comparison operators
console.log(5 == 5);
console.log(3 <= 5);
console.log(5 <= 5)
console.log("**************");
console.log(5 == "5");//True - [loose equality]
console.log(5 === "5") //false [Strict Equality] (checks for the data type)
// Logical Operators

//Truth Table - Discrete Math
console.log(3>5 && 5<4); //fasle and false = false
console.log(3<5 && 5<4); //true and false = false
console.log(3<5 || 5<4);// true or false =  true
console.log(!true); //False
console.log(!5<6); //False
const error = true

console.log("**********")
//Unary Operator
let value = 2;
value ++; //Adds 1 to value
console.log(value); //value = 3
--value;
console.log(value); // Value = 2
value--;
console.log(value--);//1
console.log(value);
console.log(--value);//-1

