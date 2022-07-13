// ( "This is another test" )=> returns "This is rehtona test"
let reverseString = str => {
    return str.split('').reverse().join('')
}

let string = 'This is another test'

let ans = string.split(' ').map(word => {
    if (word.length >= 5) {
        return reverseString(word)
    } else {
        return word 
    }
}).join(' ')

console.log(ans)

