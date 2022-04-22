const findSum = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            console.log("Please enter numbers only to find sum.");
            return -1;
        }
        sum += parseInt(str[i]);
    }
    return sum;
};

console.log(findSum("1234"));