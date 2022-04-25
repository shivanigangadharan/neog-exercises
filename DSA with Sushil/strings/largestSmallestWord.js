//Find largest and smallest word in  a string

const largestSmallestWord = (str) => {
    let highest = "";
    let lowest = str;
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            temp += str[i];
        } else {
            if (temp.length > highest.length) {
                highest = temp;
            }
            if (temp.length < lowest.length && temp !== "") {
                lowest = temp;
            }
            temp = "";
        }
    }
    if (temp.length > highest.length) {
        highest = temp;
    }
    if (temp.length < lowest.length && temp !== "") {
        lowest = temp;
    }
    return [highest, lowest];
};

console.log(largestSmallestWord(" i am shivani "));
//time complexity : O(n)