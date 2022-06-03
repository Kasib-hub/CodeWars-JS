// 7 kyu
// Compare Strings by Sum of Chars
// Compare two strings by comparing the sum of their values (ASCII character code).
// Your method should return true, if the strings are equal and false if they are not equal.

//   "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)


function compare(s1, s2) {

  let sum1, sum2;

  // check to see if strings consist of only letters
  if (!/^[a-z]+$/gi.test(s1) || s1 == null) {
    sum1 = 0;
  }
  
  if (!/^[a-z]+$/gi.test(s2) || s2 == null) {
    sum2 = 0;
  }

  // sum up the asci values of the letters if they pass the test
  if (sum1 != 0) {
     sum1 = s1.split('').map(char => char.toUpperCase().charCodeAt(char))
    .reduce((acc, curr) => acc + curr);
  }
 
  if (sum2 != 0) {
      sum2 = s2.split('').map(char => char.toUpperCase().charCodeAt(char))
    .reduce((acc, curr) => acc + curr)
  }

  let bool = false;
  sum1 === sum2 ? bool = true : bool = false;
  return bool;
  
}