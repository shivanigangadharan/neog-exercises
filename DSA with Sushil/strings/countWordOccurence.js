//Given a string count the number of time each word has occurred in the string.

const countWordOccurence = (str) => {
    let result = {};
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        //traversing till length of string
        if (str[i] !== " ") {
            temp += str[i];
        } else {
            if (Object.keys(result).includes(temp)) {
                //worst case the Obj has all the keys and traverses till end (n times)
                //traversing till no of words in string (no of keys)
                result[temp] += 1;
                temp = "";
            } else {
                result[temp] = 1;
                temp = "";
            }
        }
    }
    if (Object.keys(result).includes(temp)) {
        result[temp] += 1;
    } else {
        result[temp] = 1;
    }
    return result;
};

console.log(countWordOccurence("my name name is shivani shivani"));

//can also solve this using reduce() function -> check if curr in prev (convert into array using split())

//time complexity : doubt
//space complexity: