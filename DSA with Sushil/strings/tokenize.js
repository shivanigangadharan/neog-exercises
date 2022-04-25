// Tokenize a string
// Input: Banana and Mango
// Token: a
// Output: [B, n, n,  ,nd M, ngo]

export const tokenize = (str, ch) => {
    let result = [];
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ch) {
            temp += str[i];
        } else {
            result.push(temp);
            temp = "";
        }
    }
    result.push(temp);
    return result;
};

console.log(tokenize("Banana and Mango", 'a'));
//time complexity : O(n)
//space complexity = 2n (worst case, literals and result have the entire str, so n for each)