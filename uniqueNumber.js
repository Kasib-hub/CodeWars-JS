


let nums = [1, 1, 1, 1, 2, 1, 1, 1];

// filter a list to take out the unique numbers
let repeat = nums.filter((item, index) => nums.indexOf(item) != index);

let res = 0;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] != repeat[0]) {
        res = nums[i];
    }
}

console.log(res);

