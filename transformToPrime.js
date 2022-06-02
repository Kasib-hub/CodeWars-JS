// 6 kyu
// Transform To Prime

// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// minimumNumber ({2,12,8,4,6}) ==> return (5)

function isPrime(digit) {
    if (digit <= 1) {
        return false;
    }
    for (let i = 2; i < digit; i++) {
        if (digit % i == 0) {
            return false;
        }
    }
    return true;
}

function minimumNumber(numbers) {
    let sum = numbers.reduce((acc, curr) => acc + curr);

    if (isPrime(sum)) {
        return 0;
    }

    for (let i = sum; i < sum * 2; i++) {
        if (isPrime(i)) {
            return i - sum;
        }
    }
}