//Q.3. Return an array of objects with key as item and value as number of characters in the string.

const words = ["why", "pencil", "of", "home", "pour"];

const myFunc = (acc, curr) => {
    console.log(curr)
    return [...acc,
    {
        [curr]: curr.length
    }
    ]
    return acc;
};

console.log(words.reduce(myFunc, []));
