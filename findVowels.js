

let array = 'Super';
let word = array.toLowerCase().split('');
let res = [];
let vowels = 'aeiouy';
word.forEach((char, i) => {
    if (vowels.indexOf(char) != -1) {
        res.push(i + 1);
    }
})
console.log(res);