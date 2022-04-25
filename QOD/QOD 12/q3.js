//program to reverse a number

const reverseNumber = (n) => {
    let newNo = "";
    if (n === 0) {
        return n;
    }
    while (n !== 0) {
        newNo += n % 10;
        n = parseInt(n / 10);
    }
    return parseInt(newNo);
};

console.log(reverseNumber(3234));
