let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let ans = ''
ans += '('
let str = num.forEach((item, index) => {
    ans += item
    if (index == 2) {
        
        ans += ')'
        ans += ' '
    }
    if (index == 5) {
        ans += '-'
    }
})

console.log(ans.toString())