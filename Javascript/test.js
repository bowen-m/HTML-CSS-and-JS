/**
 * let age = 26;
if (age < 18) {
  console.log("Join KIds Program");
} else if (age < 27) {
  console.log("Join youth Program");
} else if (age < 45) {
  console.log("Join Join Adults Program");
} else if (age > 45) {
  console.log("Join elderly program");}
 * 
 */

  function removeVowels(str) {
    return str.replace(/[aiou]/gi, '');
  }
  
  // Example usage of the function
  let inputString = "The opinion that outerbanks is better than money heist is very unpopular.";
  let outputString = removeVowels(inputString);
  console.log(outputString); 



  
  


  
  
  
  
