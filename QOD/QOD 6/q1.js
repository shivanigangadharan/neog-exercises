//A program that reads a string and counts the number of characters present in the string

const countChar = (str) => {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
      count += 1;
    }
    return count;
  };
  console.log(countChar("abc"));
