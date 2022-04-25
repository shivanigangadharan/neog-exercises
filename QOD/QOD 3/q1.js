//Given a sentence, your functions should return the number of words in the sentence.

const noOfWords = (str) => {
    let count = 0;
    let temp = "";
    str = str.trim();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count += 1;
        }
    }
    return count + 1;
};

console.log(noOfWords("   my name is shivani   "));
