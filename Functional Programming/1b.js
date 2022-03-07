//Q.2. Find the sum of all numbers at odd indices.

const arr = [1, 5, 9, 10, 11, 12, 13, 14];

const sum = (acc, curr, ind) => {
    if (ind % 2 == 1) {
        acc += curr;
    }
    return acc;
}

console.log(arr.reduce(sum, 0));