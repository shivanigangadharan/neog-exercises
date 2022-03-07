//Q.5. Return an array of numbers where odd numbers are incremented by 1 and even numbers are decremented by 1.

const arr = [1, 5, -90, 10, 50, 11, 12, 13, 14];

const myFunc = (accArr, curr) => {
    accArr = curr % 2 == 0 ? [...accArr, curr - 1] : [...accArr, curr + 1];
    return accArr;
};

console.log(arr.reduce(myFunc, []));
