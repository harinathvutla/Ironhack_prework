/*
Let’s create another game of multiples, similar to FizzBuzz:

Print the numbers 1 through 50.
If the number is divisible by 7, you must skip the next number.
If the number is divisible by 10 or 15, you must print “Donkey!”.
If the number is not divisible by 2 and the previous number is divisible by 10, you must print “Monkey!”.
*/

for(let i=1;i<=50;i++)
{
  if(i%7===0)
  {
    console.log(i);
    i+=1;
  }
  else if((i%10===0) || (i%15===0))
  {
      console.log("Donkey!")
  }
  else if((i%2!==0)&&((i-1)%10===0))
  {
    console.log("Monkey!");
  }
  else
  {
    console.log(i);
  }

}
