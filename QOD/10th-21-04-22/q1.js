const findProfitLoss = (cp, sp) => {
    if (cp < 0 || sp < 0) {
        console.log("Please enter valid costs.");
        return 0;
    }
    cp > sp
        ? console.log("Loss of Rs.", cp - sp)
        : console.log("Profit of Rs.", sp - cp);
};

findProfitLoss(250, 300);
findProfitLoss(400, 290);