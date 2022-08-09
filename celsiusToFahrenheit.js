/* celsius to fahrenheit */
function getCelsius(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
const fahrenheit = getCelsius(50);
console.log("Fahrenheit ", fahrenheit);


/* fahrenheit to celsius */
function getFahrenheit(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

const celsius = getFahrenheit(50);
console.log("Celsius ", celsius);