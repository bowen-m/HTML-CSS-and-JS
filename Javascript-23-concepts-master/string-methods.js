/*let name = "Albert"; // created an instance of a string object

let school = new String("jkuat"); // created an instance of a string object

console.log(name.charAt(0));
console.log(school.charAt(0));

let arr = [2.3, 4]; // new Array([1,2,3])

console.log(arr);*/


//chartAt(0) - Returns the character at index number zero , 0
//concat
/*let fname = "Bowen"
let sname = "Keter"
console.log(fname.concat(" ",sname))
fname.slice(0,3)
console.log(fname)*/

//indexOf
//console.log(sname.indexOf("t"))

//write a function to count the number of occurence in a string
//E.g: "congratulations", "n-2", "a-2", "c-1"
//Slice

function charCounter(word,letter){
   //logic
   //Check if the character/letter exists in the word
   if(word.indexOf(letter) === -1){console.log("letter "+ letter + " not found in " + word)}
    else{
        //letter found at least once
        //Create a loop - each time slicing the string at the end of the first appearance and call the charCounter on the new string - recursion
        let count = word.split(letter).lenght - 1
       console.log( "letter "+ letter + " appears " + count + " times in ")
    }
}
   

charCounter("bonwen","n")
charCounter("congratulations", "x")
charCounter("aeroplane", "y")
console.log()
