//Q.2. Given an array of strings, return an array with strings which have vowels.

const words = ["why", "pencil", "rhythm", "home", "pour"];

const myFunc = (acc, curr) => {
    for (let i = 0; i < curr.length; i++) {
        if (
            curr[i] == "a" ||
            curr[i] == "e" ||
            curr[i] == "i" ||
            curr[i] == "o" ||
            curr[i] == "u"
        ) {
            acc = [...acc, curr];
            break;
        }
    }
    return acc;
};

console.log(words.reduce(myFunc, []));