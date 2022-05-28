// 7 kyu, Minimize Sum of Array

function minSum(arr) {

    let ans = arr.sort((a, b) => a - b).reduce((acc, curr) => acc + curr * arr.pop(), 0);

    return ans;

}