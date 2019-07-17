/*jshint esversion: 6 */
/* sum the array, divide the sum by the total number of elements in the array and assign this to a variable called average.

The average should be: 8.1666. */
let sum = 0;
const numbers = [1, 7, 4, 11, 16, 10];
/* fill in conditions here to iterate over array */
for(let i=0;i<numbers.length;i++){
  // Add each number in the array to the sum
  sum+= numbers[i];
}

 let average = sum/numbers.length;
 console.log(average);
