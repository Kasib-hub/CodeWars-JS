// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap(numbers) {
    let sorted = numbers.sort((a, b) => a - b);
    let difference = 0;
    let current = 0;

    for (let i = 1; i < sorted.length; i++) {
        current = Math.abs(sorted[i] - sorted[i - 1]);
        if (current > difference) {
            difference = current;
        }
    }
    return difference;
}
console.log(difference);