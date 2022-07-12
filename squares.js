// split num to elements then square and join

let num = 9119

let str = num.toString().split('').map(digit => {
    return parseInt(digit) ** 2
})

let res = []

console.log(str.join(''))