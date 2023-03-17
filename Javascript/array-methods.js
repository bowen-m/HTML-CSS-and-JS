const students = ["albert", "mathew" , "sheila" , "kenneth"];
let name = "Hello"
function adddNewStudent(arr , name) {
    arr.push(name)
}
function func2(var1 , var2) {
    console.log(var1 , var2)
}
console.log(students);

adddNewStudent(students , "Jedial");//Added Jedial to students array



adddNewStudent(students ,  "Eddy" );//Added Eddy to students arrayy

students.pop() //remove last element of array - remove Eddy from students array

console.log(students);

//console.log(students);
