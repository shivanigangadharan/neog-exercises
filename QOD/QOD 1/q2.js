const findLength = (myArr) => {
    let count = 0;
    myArr.map((ele) => (count += 1));
    return count;
};

console.log(findLength([1, 5, 3, 7, 8, 9]));
