let arr1 = [1, 2, 3, 4, 3, 2, 1];
let arr2 = [1, 100, 50, -51, 1, 1];

// arr1 answer is 3
// arr2 answer is 1
let left = 0;
let right = arr1.reduce((a, b) => a + b, 0)

for (let i = 0; i < arr1.length; i++) {
    if (i > 0) {
        left += arr1[i - 1];
    }
    right -= arr1[i]
    if (left == right) {
        console.log(i)
    }
}
console.log(right)




