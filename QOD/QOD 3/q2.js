//Given an array and two numbers,
// your function should replace all entries of the first number in an array with the second number.

const replaceNumber = (arr, n1, n2) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n1) {
            arr[i] = n2;
        }
    }
    return arr;
};

console.log(replaceNumber([1, 2, 3, 4, 2, 3, 2, 6], 2, 8));
