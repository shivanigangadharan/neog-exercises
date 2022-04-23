//Write a program that converts the string into uppercase.

const convertToUpper = (str) => {
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
            temp += String.fromCharCode(str[i].charCodeAt() - 32);
        } else {
            temp += str[i];
        }
    }
    return temp;
};
console.log(convertToUpper("abcGDvvg65#ds"));
