//Q.1. Find the sum of all odd numbers

const arr = [1, 5, 9, 10, 11, 12, 13, 14];

function sum(acc, curr) {
    if (curr % 2 == 1) {
        acc += curr
    }
    return acc;
}

console.log(arr.reduce(sum));