const targetSum = (arr, target) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j], arr[i] + arr[j]);
            if (arr[i] + arr[j] === target) {
                result.push(arr[i], arr[j]);
                return result;
            }
        }
    }
    return -1;
};

console.log(targetSum([1, 2, 4, 3, 3, 5, 6], 6));