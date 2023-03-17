/*Write a javascript function that takes a string as an argument and returns a
 boolean indicating whether the string is a palindrome (a word or phrase that reads the
same forwards and backwards). You can use string methods such as split(), 
reverse(), and join() to accomplish this task.*/
/*const nums = [1,2,3,4]
nums.reverse()
console.log(nums)*/

function isPalindrome(str){
    str = str.toLowerCase() // good
    /// console.log(str.splt("").reverse().join(""))
    /* let newArray = str.split("")
     let reversedNewArray = newArray.reverse()
     let reversedString = reversedNewArray.join("")*/
       
   
   return  str === str.split("").reverse().join("")

}
console.log(isPalindrome("Michelle"))
console.log(isPalindrome("Bowen"))
console.log(isPalindrome("Level"))
console.log(isPalindrome("Racecar"))