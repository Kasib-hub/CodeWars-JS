// ("bitcoin take over the world maybe who knows perhaps"), 3)

let findShort = (s) => {
    strArr = s.split(' ').reduce((acc, curr) => {
        return acc.length <= curr.length ? acc : curr
    })
    return strArr.length
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))