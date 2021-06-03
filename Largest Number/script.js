/*

Write a function called largestNumber that takes a positive or zero integer argument magnitude and returns the largest integer possible with a number of digits equal to magnitude. If magnitude is zero, return 0.

Example:

largestNumber(0);  // return 0
largestNumber(1);  // return 9
largestNumber(3);  // return 999
largestNumber(4);  // return 9999
largestNumber(8);  // return 99999999

*/

const largestNumber = (magnitude) => {
  let numberArray = []
  for (i=1;i<=magnitude; i++){
    numberArray.push(9)
  }
  const num = numberArray.join(" ")
  console.log (num)
}

largestNumber(10)
