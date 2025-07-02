
export const convertirCelsiusAFahrenheit=(celsius)=>{
    let resultado = celsius *9 / 5.0 + 32;
    return resultado;
}

export const convertirFahrenheitACelsiusA=(fahrenheit)=> {
    let resultado = (fahrenheit + 32) * 5 /9.0;
    return resultado;
}


let celsius= 32;
let resultado = convertirCelsiusAFahrenheit(celsius);
console.log(`${celsius})°C = ${resultado}°F`);

console.log();
