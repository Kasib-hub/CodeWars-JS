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