// automatically converts fractions
let series = [1, 1/4, 1/7, 1/10, 1/13];
let arr = [];

// generate series
let j = 1;
for (var i = 1; j <= 5; i += 3) {
    arr.push(1/i);
    j++;
}

// sum an array
let res = arr.reduce((a, b) => a+b, 0);

// round a number to 2 decimal places
let ans = res.toFixed(2);


//console.log(ans);
console.log(arr);

