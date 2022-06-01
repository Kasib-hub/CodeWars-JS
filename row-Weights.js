// // 7 kyu
// Row Weights

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.


function rowWeights(array) {
    let even = 0;
    let odd = 0;
    let ans = [];

    array.forEach((num, i) => {
        i % 2 == 0 ? even += num : odd += num;
    })

    ans.push(even, odd);

    return ans;
}