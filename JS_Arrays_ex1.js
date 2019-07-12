/*jshint esversion: 6 */
/*
Let’s perform a few operations on the array above.

Add two of your favorite animals to the end of the array.
Remove the first two elements of the array.
Replace the last element in the array with the word “last”.
 */


/**************************existing code********************************************************/
const animalArray = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];
console.log(`Original: ${animalArray}`); // => Original: dog,cat,fish,lizard,whale,cheetah
console.log("------");

// "From the first element, remove one going forward"
animalArray.splice(0, 1);
console.log(`From the first element, remove one going forward: ${animalArray}`);
// => From the first element, remove one going forward: cat,fish,lizard,whale,cheetah

//  "From the second element, remove two going forward"
animalArray.splice(2, 2);
console.log(`From the second element, remove two going forward: ${animalArray}`);
// => From the second element, remove two going forward: cat,fish,cheetah

// If we pass a third argument
// It is inserted as the replacement
animalArray.splice(0, 1, "Something else");
console.log(`If we pass a third argument: ${animalArray}`); // => If we pass a third argument: Something else,fish,cheetah


/*****************************my code*********************************************************************/


//Add two of your favorite animals to the end of the array.
animalArray.push('rabbit','elephant');
console.log("new 2 animals added at the end of the array are:  "+animalArray);

//Remove the first two elements of the array.
animalArray.splice(0,2);
console.log("after removing the first 2 elements of the array: "+animalArray);

//Replace the last element in the array with the word “last”.
animalArray.splice(animalArray.length-1,1);
console.log("after removing the last element of the array: "+animalArray);
