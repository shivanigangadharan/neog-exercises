//Q.1. Find the number of strings with similar number of characters. Return in the form of object with key as length of string and value as no of strings with that length

const arr = ["apple", "mango", "shivani", "tanay", "four"];

const myFunc = (accObj, curr) => {
    if (accObj[curr.length] == undefined) {
        console.log("Adding new : ", curr.length);
        return { ...accObj, [curr.length]: 1 };
    } else {
        return { ...accObj, [curr.length]: accObj[curr.length] + 1 };
    }
};

console.log(arr.reduce(myFunc, {}));