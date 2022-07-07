// 5 kyu - moving characters in place
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

let str = 'Pig latin is cool !';

let arr = str.split(' ');
let res = [];

let mapped = arr.map(word => {
    // first letter of each word
    let firstChar = word.charAt(0);

    // check if letter, push the sliced word with additions
    // the slice is starting a new word from the [1] position. Then we add the first char plus 'ay'
    if (firstChar.toUpperCase() != firstChar.toLowerCase()) {
        res.push(word.slice(1) + firstChar + 'ay');
    } else {
        res.push(word)
    }
})

console.log(res.join(' '))

//console.log(firstChar)