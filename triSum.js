// 7 kyu - TripletSum

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// Input >> Output Examples
// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)

function maxTriSum(numbers) {

    // filter out repeats and get the result of unique values
    let unique = numbers.sort((a, b) => a - b)
        .filter((num, index) => {
            return numbers.indexOf(num) == index;
        });

    let ans = unique[unique.length - 1] + unique[unique.length - 2] + unique[unique.length - 3];

    return ans;
}