// /**
//  * 1. How would you define a function that takes two numbers 
//  * as parameters and returns their sum?
//  */
function sumOfTwoNUmbers(a,b){
return`The sum of two numbers:${a+b}`
}
var result=sumOfTwoNUmbers(35,25);
console.log(result)

 /**
  * 2. If you define a function that accepts a string as a parameter, 
  how would you modify it to print the string in uppercase?
 */
function print(str){
            console.log(str.toUpperCase())
}
print(`Welcome to javascript functions`);

/**
 * 3. In JavaScript, what happens if you pass an undefined value 
  as an argument to a function that expects a parameter?
 */
function functionOne(str){
     console.log(`Named function:${str}`);
}
functionOne();
/**
 * 4. Suppose you have a function that takes an array as a parameter. 
 How would you check inside the function if the array is empty?
 */
 function checkArray(arr) {
    if(arr.length=== 0) {
        console.log("The array is empty.");
    } else {
        console.log("The array is not empty.");
    }
}
checkArray([]);
checkArray([6,7,8,9]);
/**
 * 5.write a function that takes two numbers as parameters 
 and returns their difference.
 */

 function difference(a,b){
            return`Difference of Two numbers:${a-b}`
 }
 var res=difference(10,20);
 console.log(res)
 /**
* 6. Define a function that accepts a name and age as parameters, 
and returns a string with a greeting like "Hello, [name]! You are [age] years old."
*/
function greet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}
var value=greet('Durgadevi',19);
console.log(value)
/**
 * 7. Write a function that takes a number as a parameter and 
 returns true if the number is a even number, otherwise false.
 */
function isEven(a){
      return a%2===0
}
var output=isEven(6)
var num=isEven(3)
console.log(output)
console.log(num)

function even(num){
       if(num%2===0){
        return true;
       }
       else{
        return false;
       }
}
var checkEven=even(6)
console.log(checkEven)
