// Given an array/list [] of integers , Construct a product array Of same size
//  Such That prod[i] is equal to The Product of all the elements of Arr[]
//  except Arr[i].

function productArray(numbers) {
    let ans = [];
    let prod = 0;

    // filter out elements that don't match the current index
    // push the product of the filtered elements
    for (let i = 0; i < numbers.length; i++) {
        prod = numbers.filter((num, index) => i != index);
        ans.push(prod.reduce((acc, curr) => acc * curr));
    }

    return ans;
}