const decToBinary = (decimal) => {
    let quotient;
    let remainder;
    let binary = "";
    while (quotient !== 0) {
        quotient = parseInt(decimal / 2);
        remainder = decimal % 2;
        binary += remainder;
        decimal = quotient;
    }
    return binary;
};

console.log(decToBinary(5));
