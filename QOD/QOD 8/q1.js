// Given n numbers, your function should return the maximum of them all.
// The number of parameters won't be accepted by the user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

const findMax = (...myArgs) => {
    let res = myArgs.reduce((prev, curr) => {
        return curr > prev ? curr : prev;
    });
    return res;
};

console.log(findMax(3, 2, 6, 100, 3, 0, 99, 10, 5));
