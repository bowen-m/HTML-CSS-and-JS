/*Write a function that takes a
 string as an argument and returns 
 the longest word in the string. 
 You can use string methods such as
  split(), sort(),and length to accomplish this task.*/

/*function longestWord(str){
    return "longest word"
    //logic
    //convert string to an array of words
   //Reduce(()=>) -- MDN
   const str = 'The quick brown fox jumped over the lazy dog';
const longest = longestWord(str);
console.log(longest); // Output: 'jumped'



} */
//longestWord("My name is Bowen. I am a software developer") //developer
/*function longestWord(str) {
    // Step 1: Split the string into an array of words
    const wordsArray = str.split(' ');
  
    // Step 2: Sort the words in the array by length, in descending order
    wordsArray.sort((a, b) => b.length - a.length);
  
    // Step 3: Return the first (longest) word in the sorted array
    return wordsArray[0];
  }
  
  // Example usage:
  /*const myString = 'The quick brown fox jumped over the lazy dog';
  const longest = longestWord(myString);
  console.log(longest); // Output: 'jumped'*/

  
  /*
    function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  console.log(findLongestWord("My name is Mathew Bowen and I'm eighteen years old "))
*/
function longestWordInSentence(sentence){
  let sentenceArray = sentence.split(" ")
  //console.log(sentenceArray)
  let longestWord = ""
  for(let index = 0; index < sentenceArray.length; index++){
   // console.log(sentenceArray[0] + " is at index " + index)
   if(sentenceArray[index].length > longestWord.length){
    //"this" > "" longestWord = "this"
    longestWord = sentenceArray[index]
   }
  }


  return "the longest Word" + longestWord + "has" + lengthOfLongestWord + 
  "characters" 
}
let res = longestWordInSentence("This is a full-stack web dev course")
let res2 = longestWordInSentence("This is a different string passed as a value to this method")
console.log(res)
console.log(res2)













  