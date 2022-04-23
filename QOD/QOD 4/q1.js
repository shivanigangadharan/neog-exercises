
const findMin = (...myArgs) => {
    let result = myArgs.reduce((prev, curr) => {
        if (curr < prev) { return curr } else { return prev }
    });
    return result;
}

console.log(findMin(-3, 0, -9, -8));