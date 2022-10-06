function scramble(str1, str2) {
  // count # of char in target string, remove from obj as you encounter them in search string (str1)
  let obj = {}
  for (let char of str2) {
    obj[char] ? obj[char]++ : obj[char] = 1
  }

  for (let char of str1) {
    if (obj[char] === 1) {
      delete obj[char]
    } else if (obj[char] > 1) {
      obj[char]--
    }
  }
  if (Object.keys(obj).length === 0) {
    return true
  }
  return false
}

console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))
console.log(scramble('winer', 'winner'))