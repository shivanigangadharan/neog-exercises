//find sum of N natural numbers

const findSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

console.log(findSum(prompt("Please enter number of digits.")));
