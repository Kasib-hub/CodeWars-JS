function solution(number) {
    let roman = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1  
    }

    res = ''
    for (prop in roman) {
        
        while (number >= roman[prop]) {
            res += prop
            number -= roman[prop]
        }

    }
    return res

}
console.log(solution(4))
console.log(solution(9))
console.log(solution(19))
console.log(solution(22))