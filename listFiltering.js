// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

let arr = [1,2,'a','b'];
let list = [1,'a','b',0,15];

// type of item (declared in arrow function) does not equal string so filter it out
let filter = arr.filter(item => typeof item != 'string');

console.log(filter.toString());

