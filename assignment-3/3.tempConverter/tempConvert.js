function convertToFahrenheit(celsius){
  let convertToFahrenheit = celsius * 9 / 5 + 32;
  let temperature = `${celsius} \xB0C is ${convertToFahrenheit} \xB0F.`;
    console.log(temperature);
}
// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit){
  let fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
  let temperature = `${fahrenheit} \xB0F is ${fahrenheitToCelsius} '\xB0C.`;
    console.log(temperature);
} 
convertToFahrenheit(60);
fahrenheitToCelsius(45);
