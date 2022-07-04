let numbers = '1 2 3 4 5';


// remember to split by whatever empty space is in there
let split = numbers.split(' ');
let result = [];
let ans = '';

// access string with forEach
split.forEach((char) => {
    result.push(parseInt(char))
})

// spread operator helps here
ans += Math.max(...result);
ans += ' ';
ans += Math.min(...result);

console.log(result);
console.log(ans);