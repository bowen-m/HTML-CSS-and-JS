/*function findLongestWord(str) {
  // Step 1. Split the string into an array of strings
  var strSplit = str.split(' ');
  // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
  // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
	
  // Step 2. Initiate a variable that will hold the length of the longest word
  var longestWord = value;

  // Step 3. Create the FOR loop
  for(var str = 0; str < strSplit.length; str++){
    if(strSplit[str].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
	longestWord = strSplit[str].length; // ...then longestWord takes this new value
     }
     return longestWord
    }
  }
  console.log(findLongestWord("Ornithology is the scientific study of birds"))
  
*/
function longestWord(str){
  let strArr = str.split(" ")
  //console.log(strArr)
 return strArr.reduce(function(accumulator,nextElem){
    //console.log(nextElem)
    if(nextElem.length>accumulator.length){
      return nextElem
    }
    return accumulator
  })
}
console.log(longestWord("Ornithology is the scientifically study of birds"))