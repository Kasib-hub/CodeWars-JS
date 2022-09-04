function sumStrings(a,b) {
    console.log(a.length, b.length)
    // basically split big number and add each at index
    if (a.length < 14 && b.length < 14) {
        return String(Number(a) + Number(b))
    }
    a = a.split('').reverse().join('')
    b = b.split('').reverse().join('')
    let res = ''
    let carry = 0
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if (a[i] == null) {
            res += String(Number(b[i]) + Number(carry))
            carry = 0
        }
        else if (b[i] == null) {
            res += String(Number(a[i]) + Number(carry))
            carry = 0
        }
        else {
            temp = String(Number(a[i]) + Number(b[i]) + carry)
            console.log(`the position ${i} sum is ${temp}`)
            if (Number(temp) > 9) {
                res += temp[1]
                carry = 1
            } else {
                res += temp
                carry = 0
            }
        }
    }
    carry > 0 ? res += '1' : res
    return res.split('').reverse().join('')
    rev_res = res.split('').reverse().join('')
    if (rev_res[0] === '0') {
       return rev_res = rev_res.split('').slice(1).join('')
    }


}

console.log(sumStrings('123', '456'))
console.log(sumStrings('1', '3'))
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
// 712577413488402631964821329

console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'))
// 131151201344081895336534324866

console.log(sumStrings('020526972982383848871684992026', '53479878547422022291352944805'))