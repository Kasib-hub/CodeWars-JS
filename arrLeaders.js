// 7 kyu Array Leaders
// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

function arrayLeaders(numbers) {
    let ans = [];
    let sum = numbers.reduce((acc, curr) => acc + curr);

    // subtract each element from sum through iteration
    numbers.forEach(num => {
        sum -= num;
        if (num > sum) {
            ans.push(num);
        }
    })

    return ans;
}

