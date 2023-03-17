const headingOne = document.querySelector("h1")
const listItems = document.querySelectorAll("li")
/**
 * getElementById("")
 * getElementsByClassName("")
 */
 
console.log(headingOne)
console.log(listItems)

//Modify the content
headingOne.textContent = "Welcome to JS"
document.querySelector("h2").innerHTML = "<a href='https://www.tiktok.com'>Visit Tiktok<a/>"
document.querySelector("a").setAttribute("href", "https://www.instagram.com")
document.querySelector("a").setAttribute("class", "e-links")

//for loop

listItems.forEach(function(item , index){
    if((index+1)%2 === 0){
        item.style.color = "blue"
        item.style.fontSize = "30px"
    }
})

