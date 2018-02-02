/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */
 function greaterNumber(a,b){
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    }
}
console.log(greaterNumber(5,10));
/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */
 var myString = ""
 var i ;
function stringOfNumbers(n){
  for(i = 0; i <= n; i++){
    myString += i + ",";
 }
  return myString
}
console.log(stringOfNumbers(10))

/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */
var apple = [5,10,15];
function sumOfArray(bannana){
	if(bannana ==  false){
      return apple[0] + apple[1] + apple[2];
	}else{
      return "Make sure the array is filled with numbers, not strings."
    }
}
console.log(sumOfArray(apple.some(isNaN)))
/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
 var pop = [1,2,3,4,5,6,7,8,9,10];
 var mop = [];

function getEvens(sop){
	for(var i = 0; i < sop.length; i++){
		if ((pop[i] % 2) === 0) {
			mop.push(pop[i]);
		}
	}
  return mop
}
console.log(getEvens(pop))
/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */

/* I'm using the array called pop from the last problem */
var nop = [];
function getOdds(cop){
	for(var i = 0; i < cop.length; i++){
		if ((pop[i] % 2) > 0) {
			nop.push(pop[i]);
		}
	}
  return nop
}
console.log(getOdds(pop))

/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
function calculate(num4, num5, operator){
	if (operator == "add"){
		return num4 + num5;

	}else if(operator == "subtract"){
		return num4 - num5;

	}else if(operator == "multiply"){
		return num4 * num5;

	}else if(operator == "divide"){
		return num4 / num5;

	}else{
		return "Invalid operator dummy."
	}
}
console.log(calculate(10, 5, "add"))