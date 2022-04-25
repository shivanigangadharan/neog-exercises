// Given a string replace string with number times each character is repeated.
// Input: aaacdbbbb
// Output: a3c1d1b4

const replaceString = (str) => {
    let result = '';
    let temp = str[0];
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            temp = str[i];
            count += 1;
        } else {
            result = result + str[i] + (count + 1);
            temp = str[i + 1];
            count = 0;
        }
    }
    return result;
}
console.log(replaceString('aaabbbc'));

//need to fix bugs