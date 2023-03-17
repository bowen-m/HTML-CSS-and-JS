// functon is a reusable block of code

function addTwoNumbers(num1,num2) {
    let result = num1 + num2;
   console.log(result);
  // return result;
}
console.log(addTwoNumbers(2,4)); //invoking/calling the function
let newResult = addTwoNumbers(20,40);// let newResult = 60
console.log(newResult);
function checkLengthOfString(str) {
    return str.lenght;
}
console.log(checkLengthOfString(Albert));



//Write a function to print all even numbers greater than 30 but less than 50

function printEvenNumbers() {
    for (let num = 31; num < 50; num++) {
      if (num % 2 === 0) {
        console.log(num);
      }
    }
  }
  printEvenNumbers();

  function evenNumbers(lowerLimit,upperLimit) {
    let runningNumber = lowerLimit +1;

    for (runningNumber; runningNumber < upperLimit; runningNumber++) {
      if (runningNumber % 2 === 0) {
        //The number is even
        console.log(runningNumber);
      }
    }
  }
  evenNumbers(20,50);


  //Write a function that takes an array of numbers as an argument and returns the sum of the numbers in the array.Then, call the function and print the result to the console 
function sumofnumbers()

  //Write a function that takes a string as an argument and returns the string with all the vowels removed

  //Write a function that takes an array of numbers as an argument and returns the average of those numbers

  let sautisol = {
    members: ["bien","savara","chimano"],
    albums: 10,
    sing: function() {
        console.log("Ka uko sawa mi nko sawa");
    },
};

sautisol.sing();
//Prototypes

 //Write a function that takes an array of numbers as an argument and returns the average of those numbers


 function calculateAverage(numbers) {
  // Calculate the sum of all the numbers in the array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  // Calculate the average by dividing the sum by the length of the array
  const average = sum / numbers.length;
  console.log(sum);
  
  return average;
}
sum( 3,3,5)





















  
