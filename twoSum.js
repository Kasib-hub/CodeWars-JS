function twoSum(numbers, target) {
    let obj = {}
    for (let i = 0; i < numbers.length; i++) {
        if (target - numbers[i] in obj) {
            return [obj[target - numbers[i]], i]
        }
        obj[numbers[i]] = i
    }

    // let obj = {}
    // numbers.forEach((num, i) => {
    //     if (target - num in obj) {
    //         return [obj[target-num], i]
    //     } 
    //     obj[num] = i
    // })
    // return obj
    
}

console.log(twoSum([1,2,3],4))
console.log(twoSum([2,2,3],4))
console.log(twoSum([2,3,1],4))