//check if a string is a pangram or not

const checkPangram = (str) => {
    let dict = {};
    for (let i = 0; i < str.length; i++) {
        dict[str[i]] = 1;
    }
    if (Object.keys(dict).length === 26) {
        return "pangram";
    } else {
        return "Not pangram";
    }
};

console.log(checkPangram("abcdefghijklmnopqrstuvwxyz"));
