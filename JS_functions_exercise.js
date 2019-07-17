/*jshint esversion: 6 */
/*
Exercise
Get one of the Codepen included in this lesson. Create a program that accomplishes the following:

Create a function addNumbers that takes 2 parameters and returns the sum of those parameters.
Create a function subtractNumbers that takes 2 parameters and returns the difference of those parameters.
Create a function multiplyNumbers that takes 2 parameters and returns the product of those parameters.
Create a function divideNumbers that takes 2 parameters and returns the quotient of those parameters.
Create a function calculator that takes 3 parameters. The first two parameters are the numbers. The third parameter, called operation, is the operation you will execute.
If the operation is “addition”, you should execute the function addNumbers.
If the operation is “subtraction”, you should execute the function subtractNumbers.
If the operation is “multiplication”, you should execute the function multiplyNumbers.
If the operation is “division”, you should execute the function divideNumbers.
 */

function addNumbers(n1,n2){
return n1+n2;
}

function subtractNumbers(n1,n2){
return n1-n2;
}

function multiplyNumbers(n1,n2){
return n1*n2;
}

function divideNumbers(n1,n2){
return n1/n2;
}

function calculator(n1,n2,operation)
{
  if(operation==='addition')
  console.log(addNumbers(n1,n2));
  else if(operation==='subtraction')
  console.log(subtractNumbers(n1,n2));
  else if(operation==='multiplication')
  console.log(multiplyNumbers(n1,n2));
  else if(operation==='division')
  console.log(divideNumbers(n1,n2));
}

calculator(3,4,"multiplication");
calculator(100,3,"division");
calculator(543678,654325,"subtraction");
calculator(345,-30,"addition");
