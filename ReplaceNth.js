// 7 kyu
// Replace every nth

// Write a method, that replaces every nth char oldValue with char newValue.

// n:         2
// oldValue: 'a'
// newValue: 'o'
// "Vader said: No, I am your father!" -> "Vader soid: No, I am your fother!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced

function replaceNth(text, n, oldValue, newValue) {
  if (n < 1) {
    return text;
  }
  
  let count = 0;
  let arr = text.split('');
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == oldValue) {
      count++;
      if (count % n == 0) {
        arr[i] = newValue;
      }
    }
  }
  return arr.join('');
}