let A = [1,2,2,3,3,3,4,3,3,3,2,2,1]

let obj = {}

A.forEach(num => {
    if (obj[num]) {
        obj[num]++
    } else {
        obj[num] = 1
    }
})

for (prop in obj) {
    if (obj[prop] % 2 != 0) {
        console.log(parseInt(prop))
    }
}