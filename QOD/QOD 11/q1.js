const squareFunction = (a) => {
    console.log("Area of square =", a * a, "sq unit.");
    console.log("Perimeter of square =", a * 4, "units.");
};

const cubeFunction = (a) => {
    console.log("Surface area of cube =", a * a * 6, "sq units.");
    console.log("Volume of cube =", a * a * a, "cu units.");
};

squareFunction(8);
cubeFunction(5);