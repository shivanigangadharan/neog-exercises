//Given an input string S that contains multiple words, you need to remove all the spaces present in the input string.
//There can be multiple spaces present after any word.

const removeSpaces = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(removeSpaces(" Hi  I am G   Shivani  "));