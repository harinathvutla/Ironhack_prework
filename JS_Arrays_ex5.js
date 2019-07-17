/*jshint esversion: 6 */
/* Find the largest number in the array */

const numbers = [10, 16, 99, 0, 52, 41, 7];
let currentLargest = numbers[0];// set it to the value of the first element using index;
console.log(currentLargest);

for (let i=1;i<numbers.length;i++){
   if ( currentLargest<numbers[i]){
    currentLargest=numbers[i];
    }
}

console.log(`The largest number is: ${currentLargest}`);
