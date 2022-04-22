const findSmallerDate = (date1, date2) => {
    const d1 = date1.split("/");
    const d2 = date2.split("/");
    if (d1[2] !== d2[2]) {
        return d1[2] < d2[2] ? date1 : date2;
    } else if (d1[1] !== d2[1]) {
        return d1[1] < d2[1] ? date1 : date2;
    } else {
        return d1[0] < d2[0] ? date1 : date2;
    }
};

console.log(findSmallerDate("02/05/2021", "24/01/2021"));
