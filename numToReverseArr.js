// 348597 => [7,9,5,8,4,3]
// 0 => [0]

let num = 348597;

// Convert numbers to strings, then array, then reverse.
let res = num.toString().split('').reverse().map(num => {
    return Number(num)
})

console.log(res)