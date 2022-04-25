// Given a sentence, return a sentence with first letter of all words as capital.

const getUpperCase = (ch) => {
    if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
        return String.fromCharCode(ch.charCodeAt() - 32);
    }
    return ch;
};

const toSentenceCase = (sentence) => {
    const arr = sentence.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = getUpperCase(arr[i].charAt(0)) + arr[i].slice(1);
    }
    return arr.join(" ");
};

console.log(toSentenceCase("we are neo grammers"));
