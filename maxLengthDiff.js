function compare (a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }

    // the 

}

let a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

let a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

// length of the first string
console.log(a2[0].length);

// mapping the keys(each string) to a value(stringlength)
// this is similar to a foreach in that I made up the 'string' variable
const map1 = a1.map(string => string.length);
const map2 = a2.map(string => string.length);

console.log(map1);
console.log(map2);

let max = Math.max(
    // think of it as the max of the string.length in map1 and min of string.length in map2
    Math.max(...map1) - Math.min(...map2),
    Math.max(...map2) - Math.min(...map1)
)

console.log(max);