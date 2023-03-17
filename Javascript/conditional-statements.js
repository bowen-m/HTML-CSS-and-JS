//Sequence,selection & iteration flow controls
//Sequence -  Default behavior where code is executed top-down
//Selection - Choosing to execute a block of code depending on a condition - if, switch
//Iteration/Looping - Repeating execution of a block of code for a predertermined number of times - for,while
//if statement
let age = 26;
if (age < 18) {
  console.log("Join KIds Program");
} else if (age < 27) {
  console.log("Join youth Program");
} else if (age < 45) {
  console.log("Join Join Adults Program");
} else if (age > 45) {
  console.log("Join elderly program");
}
let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("I'ts Monday");
    break;
  case "Tuesday":
    console.log("I'ts Tuesday");
    break;
  case "Wednesday":
    console.log("I'ts Wednesday");
    break;
  default:
    console.log("I'ts either Thursday, Friday, Saturday or Sunday");
    break;
}

//Ternary/Conditional Operator condition? trueValue:falseValue

age > 30 ? console.log("You are an adult") : console.log("Not yet there");


//While
let height = 90
while (height < 300) {
  console.log( "great!!!!!" + height);
  height += 10;
}

//for loop
let colors = ["blue","yellow","black","red"]
console.log(colors.length)
for (let index = 0; index < colors.length; index++) {console.log(color[index] + " has " + colors[index].length + " characters ");

}




//Functons & methods
//HOF
//Assignments




//Object - prototypes
//string and array methods
