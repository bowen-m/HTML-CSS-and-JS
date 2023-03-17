let numbersArray = [1,2,353,34,2,32,35,89,789,55,8,6,54]

let sortedNumbers = numbersArray.sort()

console.log(sortedNumbers)


let truelySortedNumbers = numbersArray.sort(function(a, b){
    if(a > b) {
        return 1
    }
    if(a < b) {
        return -1;
    }
    return 0;
});

console.log(numbersArray)
console.log(sortedNumbers)