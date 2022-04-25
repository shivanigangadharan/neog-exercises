//Find whether an array is subset of another array

const findSubset = (arr1, arr2) => {
    const map = new Map();
    for (let ele of arr1) {
        map.set(ele, true);
    }
    console.log(map.get(5));
    for (let ele of arr2) {
        if (!map.has(ele)) {
            return false;
        }
    }
    return true;
};

console.log(findSubset([1, 2, 3, 4, 5, 6], [2, 5, 3, 4]));
 //time complexity : O(m+n) = O(n) -> .has() is of a const time only.
