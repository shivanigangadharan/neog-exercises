const triangleType = (a1, a2, a3) => {
    if (a1 + a2 + a3 !== 180 || a1 === 0 || a2 === 0 || a3 === 0) {
        return "Please enter valid angles for a triangle.";
    }
    if (a1 === a2 && a2 === a3) {
        return "Equilateral";
    } else if (a1 === a2 || a2 === a3 || a1 === a3) {
        return "Isosceles";
    } else {
        return "Scalene.";
    }
};

console.log(triangleType(30, 60, 90));
