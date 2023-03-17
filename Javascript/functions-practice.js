//Write a function that takes an array of numbers as an argument and returns the sum of the numbers in the array.Then, call the function and print the result to the console 

function sumElementsInArray(numArr){
    let sum = 0
    for(let index = 0; index<numArr.length; index++){
        sum += numArr[index];
    }
    return sum;
}
console.log(sumElementsInArray([56,79,764.674,5.7425]))
//************************************************//

//Write a function that takes a string as an argument and returns the string with all the vowels removed

/*function averageNum(numArr){
    let sum = 0
    for()
}*/


let sautisol = {
    members: ["bien","savara","chimano"],
    albums: 10,
    sing: function() {
        console.log("Ka uko sawa mi nko sawa");
    },
};