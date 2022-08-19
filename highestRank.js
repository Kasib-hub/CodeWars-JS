function highestRank(arr){
    let obj = {}
    for (num of arr) {
      if(obj[num]) {
        obj[num]++
      } else {
        obj[num] = 1
      }
    }
    // returning the key of the values with highest count
    return Object.keys(obj).reduce((a, b) => {
      if (obj[a] > obj[b]) {
        return Number(a)
      } else {
        return Number(b)
      }
    })
    //Your Code logic should written here
  }

