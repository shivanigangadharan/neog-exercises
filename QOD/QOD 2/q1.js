//Given length of a regular hexagon, your function should return area of the hexagon.

const areaOfHexagon = (length) => {
    return ((3 * Math.sqrt(3)) / 2) * length * length;
};

console.log(areaOfHexagon(10).toFixed(3));
