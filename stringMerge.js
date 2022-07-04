function stringMerge(string1, string2, letter){
    let result = "";
  
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === letter) {
            result = string1.substring(0, i);
            break;
        }
    }
  
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] === letter) {
            result += string2.substring(i);
            break;
        }
    }
  
    return result;
  }