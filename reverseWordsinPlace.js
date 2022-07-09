// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// reversing words in places

let str = 'This is an example!'

// separate into words with split
let res = str.split(' ').map(word => {
    return word.split('').reverse().join('');
}).join(' ')

console.log(res)