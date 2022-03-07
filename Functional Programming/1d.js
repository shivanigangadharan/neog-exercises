//Q.4. Find the numbers divisible by 10.

const arr = [1, 5, -90, 10, 50, 11, 12, 13, 14];

const myFunc = (accArr, curr) => {
    if (curr % 10 == 0) {
        accArr = [...accArr, curr];
    }
    return accArr;
};

console.log(arr.reduce(myFunc, []));
