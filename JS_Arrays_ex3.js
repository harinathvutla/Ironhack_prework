/*jshint esversion: 6 */
/* Adding the individual elements of the array and print the sum at the end */

let sum = 0;
const numbers = [2, 3, 6, 1, 7, 10];

for(let i=0 ; i < numbers.length ; i++){
sum += numbers[i];
}

console.log("********using for()**********");
// Log the sum
console.log(sum);


/***using forEach() *******/
console.log("*******using forEach()**********");
sum=0;
numbers.forEach(function(n){
   sum+=n;
});

// Log the sum
console.log(sum);
