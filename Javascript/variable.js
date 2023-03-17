//let, const var
let username = "Bowen";
const email = "bowenmathew14@gmail.com";
var age = 18; //less used (used before es6)
{
  let var1 = "variable 1";
  let var1 = "variable 2";
  let var1 = "variable 3";
  console.log(var1);
  console.log(var2);
}

username == "bowen";

// email = "bowenmathew@gmail.com"
// let imageUrl = http://"

emmail = "bowenmathew14@gmail.com";
console.log(username);
console.log(email);
console.log(age);
console.log(var1);

function funScopeTest() {
  //function scope
  let var4 = 4;
  const var5 = 5;
  var var6 = 6;
}
console.log(var6);
// this is not defined outside the function scope

//variable naming rules

/**
 *cannot be a reserved keyworrd
 * begin with either a letter, undescore or dollar sign($)
 *
 */

let $p = "jej";
let Hello = "hello";
let hello;
console.log(hello);
{
  console.log(Hello);
}

// Naming conventions in javascript(html+css)
/**
 * camelCaseConvention - naming variables
 * kebab-case - naming classes( html)
 * snake_case
 * PascalCase - naming classes(JS oop)
 */
