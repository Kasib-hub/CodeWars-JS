
function recur(n) {
    if (n < 10) {
        return n
      } else {
        let digit = n.toString().split('').map(item => {return parseInt(item)})
        let num = digit.reduce((a,b) => a+b, 0)
        return recur(num)
      }
}

console.log(recur(456))