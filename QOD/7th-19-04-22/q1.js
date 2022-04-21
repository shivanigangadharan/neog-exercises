const maskString = (str) => {
    let tempstr = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= str.length - 4) {
            tempstr += str[i];
        } else {
            tempstr += "#";
        }
    }
    return tempstr;
};

console.log(maskString("5565534276455423"));
