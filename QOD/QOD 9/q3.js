//A program that counts the value of each character and prints the most repeated character?

const mostRepeated = (str) => {
    let dict = {};
    for (let i = 0; i < str.length; i++) {
        if (Object.keys(dict).includes(str[i])) {
            dict[str[i]] += 1;
        }
        else { dict[str[i]] = 1; }
    }
    let num = 0;
    let ch = '';
    Object.keys(dict).map(e => {
        if (dict[e] > num) {
            ch = e;
            num = dict[e];
        }
    })
    return ch;
}

console.log(mostRepeated("aabbaccda"));