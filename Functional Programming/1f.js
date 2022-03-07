//Q.6. Return an object with the sum of odd numbers and even numbers separately.

const arr = [1, 5, 10, 50, 11, 12, 13, 14];

const myFunc = (accObj, curr) => {
    accObj = curr % 2 == 0 ? { ...accObj, evenSum: accObj.evenSum + curr } : { ...accObj, oddSum: accObj.oddSum + curr }
    return accObj;
};

console.log(arr.reduce(myFunc, { oddSum: 0, evenSum: 0 }));
