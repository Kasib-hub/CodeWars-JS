function stockList(listofArt, listofCat) {
    // first letter corresponds to # of books in that category
    // other letters don't seem to matter
    if (!listofArt.length) return ''

    let obj = {}

    for (let char of listofCat) {
        if (!obj[char]) {
            obj[char] = 0
        }
    }

    for (let element of listofArt) {
        let first_char = element[0]
        let str_int = element.split(' ')
        let num = Number(str_int[1])
        if (obj[first_char] === 0) {
            obj[first_char] = num
        } else if (obj[first_char] > 0) {
            obj[first_char] += num
        }
    }
    res = []
    for (prop in obj) {
        res.push(`(${prop} : ${obj[prop]})`)
    }
    return res.join(' - ')
    
}

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]))
console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]))