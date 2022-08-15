function collatz(n) {
    res = []
    res.push(n)
    while (n != 1) {
        console.log(n)
        if (n % 2 == 0) {
            n /= 2
            res.push(n)
        } else {
            n *= 3
            n += 1
            res.push(n)
        }
    }
    return res.length
}

console.log(collatz(20))
console.log(collatz(15))