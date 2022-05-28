// 7 kyu, Product of Maximums of Array

function maxProduct(numbers, size) {

    // sort arr, splice size arr from the end then multiply all elements
    let res = numbers.sort((a, b) => a - b).splice(numbers.length - size);
    let ans = res.reduce((acc, curr) => acc * curr);

    return ans;
}