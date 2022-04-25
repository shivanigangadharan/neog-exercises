//check if a string is a pangram or not

const checkPangram = (str) => {
    let dict = {};
    for (let i = 0; i < str.length; i++) {
        if (
            str[i].toLowerCase().charCodeAt() >= 97 &&
            str[i].toLowerCase().charCodeAt() <= 122
        ) {
            dict[str[i].toLowerCase()] = 1;
        }
    }
    if (Object.keys(dict).length === 26) {
        return "pangram";
    } else {
        return "Not pangram";
    }
};

console.log(checkPangram("THE QUICK BROWN FOX jumps OVER THE LAZY DOG."));

//time complexity : O(n)
//space complexity : O(26) -> constant