//Push, pop, shift, unshift, splice, slice
const vowels = ["a","e","i","o","u",];
// return values & mutating original array
console.log(vowels)
//vowels.push()//adds and element to the end
//vowels.pop()//removes last element
//vowels.shift() //removes first element
//vowels.unshift("a","a") // adds elements to the begisnning of array
//console.log(vowels.slice(2))//slices out elements from index 2
/*result = vowels.slice(2,4)//{"e","i","o"}
console.log(result)*/

//vowels.splice(1,3, "b")
console.log(vowels.join("  +    ")) //Joins elements of an array into a string
console.log(vowels)         


/*Here's an overview of some commonly used methods for working with arrays in JavaScript:

push() - Adds one or more elements to the end of an array and returns the new length of the array.

pop() - Removes and returns the last element of an array.

unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.

shift() - Removes and returns the first element of an array.

splice() - Changes the contents of an array by removing existing elements and/or adding new elements.

slice() - Returns a shallow copy of a portion of an array into a new array.

concat() - Joins two or more arrays and returns a new array that contains all the elements from the original arrays.

indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.

forEach() - Executes a provided function once for each array element.

map() - Creates a new array with the results of calling a provided function on every element in the array.

filter() - Creates a new array with all elements that pass the test implemented by the provided function.

reduce() - Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

sort() - Sorts the elements of an array in place and returns the sorted array.

reverse() - Reverses the order of the elements of an array in place and returns the reversed array.*/