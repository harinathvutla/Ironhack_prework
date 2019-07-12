/*jshint esversion: 6 */
/*
ForEach Exercise

Create an array with 6 of your favorite foods.
With the loop of your choice, iterate through the array, but only print out the foods with an even index.
*/

var foods = ['pancakes','cookies','yogurt','eggs','pasta','rice'];
var i=0;
console.log("********using while()**********");
while(i < foods.length)
{
  if(i % 2 === 0)
  console.log(foods[i]);
  i++;
}


/*********using forEach() *****************/
console.log("*******using forEach()**********");
foods.forEach(function(foo,ind){

if(ind % 2===0)
console.log(foo);
});