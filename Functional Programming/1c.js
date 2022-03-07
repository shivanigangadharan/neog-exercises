//Q.3. Find the biggest number in the array

const arr = [1, 5, -90, 10, 50, 11, 12, 13, 14];

const myFunc = (acc, curr, ind) => {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
};

console.log(arr.reduce(myFunc));
