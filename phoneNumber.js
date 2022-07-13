// Excellent method to outputting a method of a formatted string.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let format = '(xxx) xxx-xxxx'

for (let i = 0; i < num.length; i++) {
    format = format.replace('x', num[i])
}

console.log(format)