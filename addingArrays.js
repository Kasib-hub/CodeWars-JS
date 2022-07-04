let arr = [
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
    ];

// nested array of arrays
let res = "";
for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
        res += arr[j][i];
    }
    res += " ";
}
console.log(res.trim());
