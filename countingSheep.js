function countSheeps(arrayOfSheep) {
    let sheepCount = 0;

    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheepCount++;
        }
    }

    return sheepCount;
}

let sheep = [true, false, true, true, false, true, true];

console.log(countSheeps(sheep));