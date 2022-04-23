// Given a sentence, your function should reverse the order of characters in each word,
// keeping the same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
//IMPORTANT

const reverseWords = (str) => {
    let result = "";
    let temp = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === " ") {
            result = " " + temp + result;
            temp = "";
        } else {
            temp += str[i];
        }
    }
    return temp + result;
};

console.log(reverseWords("my name is shivani"));
