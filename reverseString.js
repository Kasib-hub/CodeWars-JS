function solution(str){

    // split the string
    let splitString = str.split("");

    // reverse the letters
    let reverseArray = splitString.reverse();

    // join the array back together in a string
    let joinArray = reverseArray.join("");

    // return the array as string
    return joinArray;

}

console.log(solution("Kasib"));
console.log(solution("kaya"));