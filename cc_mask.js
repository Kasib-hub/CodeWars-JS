function maskify(cc) {
    res = ''
    for (let i = 0; i < cc.length; i++) {
        if (i < cc.length - 4) {
            res += '#'
        } else {
            res += cc[i]
        }
    }
    return res
}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))
console.log(maskify('4578'))
