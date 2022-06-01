// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

function maxProduct(numbers, size){
  
  // sort arr, splice size arr from the end then multiply all elements
  let res = numbers.sort((a,b) => a - b).splice(numbers.length - size);
  let ans = res.reduce((acc, curr) => acc * curr);
  
  return ans;
}