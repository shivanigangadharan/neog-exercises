//Program to convert Fahrenheit to Celsius

const fahrenheitToCelsius = (f) => {
    return ((f - 32) * (5 / 9)).toFixed(3);
}

console.log(fahrenheitToCelsius(56));