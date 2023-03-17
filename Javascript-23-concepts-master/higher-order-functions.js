
/* A higher order function can take in another function as an 
argument or return a function

function squareNumber(num){
    console.log("squaring a number")
    return num ** 2
}
//squareNumber(5)
//console.log(squareNumber(6))
//let result = squareNumber(5)
//console.log(result)
function divideByTen(num){
    console.log("Divides a number by ten")
    return num/10
}
//console.log(divideByTen(900))

//High-Order-Function
 function calculate(func, x){
    console.log("hof started")
    return func(x)
    console.log("hof ended")
 }
// console.log(calculate(divideByTen, 50))
*/
// TASK ALLOCATOR
function taskAllocator(age){
    if(age<18){
        return function school(){
            console.log("Go to school")
            return "Go to school"
        }
    }else{
        return function work(){
            console.log("Go to work")
            return "Go to work"
        }
    }
}
let task = taskAllocator(10)()
console.log(task)



/*
//COLORS
let colors = ["red", "blue", "yellow"]
colors.forEach(function(elem){
    console.log(elem.length)
})
//sort, reduce, forEach*/






