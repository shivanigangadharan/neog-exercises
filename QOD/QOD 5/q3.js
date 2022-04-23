const replaceChar = (str, c1, c2) => {
    let result = "";
    for (let letter of str) {
        if (letter === c1) {
            letter = c2;
        }
        result += letter;
    }

    return result;
};

console.log(replaceChar("tigini", "i", "a"));