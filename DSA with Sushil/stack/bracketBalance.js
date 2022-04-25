// Check for balanced parentheses
// Input: exp = “[()]{}{[()()]()}”
// Output: Balanced
// Input: exp = “[(])”
// Output: Not Balanced

const matching = (b1, b2) => {
    if (b1 === "(" && b2 === ")") return true;
    if (b1 === "[" && b2 === "]") return true;
    if (b1 === "{" && b2 === "}") return true;
    return false;
};

const bracketBalance = (str) => {
    const bracketStack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            bracketStack.push(str[i]);
            // console.log("pushed ", bracketStack);
        } else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
            if (matching(bracketStack.pop(), str[i])) {
                // console.log("popped, ", bracketStack);
            } else {
                return false;
            }
        }
    }
    return true;
};

console.log(bracketBalance("[()]"));

