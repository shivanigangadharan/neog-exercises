const mergeArrays = (arr1, arr2) => {
    let resArr = [];
    for (let e of arr1) { resArr.push(e) }
    for (let e of arr2) { resArr.push(e) }
    return resArr;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));