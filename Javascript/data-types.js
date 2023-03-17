/**
 * *Primitive Types
 * Number
 * String
 * Boolean
 * Undefined
 * Null
 *
 * *Complex Types
 * Object
 * Array
 * Function
 */
//Statically typed languages(must indicate the typewhen declaring) &dynamically typed languages (types are assigned at runtime)
//JS is dynamically typed
//**let age = 50 //initializing a number variable
//let name = "Bowen &*%8^(&gv38"
//let isLoggedIn = true //boolean true
//let isLoggedOut = false //boolean false
//let yes = true
//let no = false
//let varrr//undefined
//console.log(age)
//console.log(varrr)
//let address = null
//console.log(address)
//console.log(typeof age);// check type using "type of"
//console.log(typeof name)// check type using "type of"
//console.log(typeof varrr)// check type using "type of"
//console.log(typeof address)// check type using "type of"

//Object datatype in JS
let person = {
  age: 60,
  height: 5,
  skinTone: "chocolate",
  "born-in": 2004,
  isKenyan: false,
  run: function () {
    console.log(".......running...");
  },
};
person.run();
console.log(person.skinTone); //using dot notation to access a value in an object
console.log(person["born in"]);
person.age = 30;
let num = 15;
console.log(person.age);
console.log(num);

//passimg by value vs by reference
//Array - an ordered(zero indexed) list of vlues enclosed in square brackets
//{} curly brackets
// () parenthesis
// [] square brackets

let numbers = [1, 2, 3, "5", "7"];
const data = [
  { age: 10, isKenyan: true },
  ["blue", "yellow"],
  54,
  true,
  "false",
];
console.log(numbers[5]); //value at index 0 in numbers array
//Print yellow from data arrray
console.log(data[1][1]);
//Print the value for isKenyan(true) from data array
console.log(data[0].isKenyan);
// square (arrays), curly(block or object), parenthesis(functions)
const salesData = {
  Q1: [500, 700, 400],
  Q2: [800, 200, 600],
  Q3: [300, 900, 100],
  Q4: [600, 400, 800],
};
console.log(
  salesData.Q1[1] + salesData.Q2[1] + salesData.Q3[1] + salesDataData.Q4[1]
);
salesData.Q5 = [100, 200, 300];
console.log(salesData);
