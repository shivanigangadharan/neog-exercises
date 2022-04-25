//Given an array and an item, your function should return the index at which the item is present.

const getIndex = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
};

console.log(getIndex([3, 2, 4, 5, 6], 4));
