const checkPalindrome = (str) => {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse === str;
};

console.log(checkPalindrome("malayalam"));
console.log(checkPalindrome("tamil"));
