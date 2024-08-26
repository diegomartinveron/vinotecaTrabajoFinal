// Solicitar el nombre del usuario
let nombre = prompt("Bienvenido a Una Copa Más, como te llamas?").toUpperCase();

// Defino ejemplos de el valor de las monedas en pesos 
const tasasConversion = {
    "USD": 1200,  // DOLAR A 1200 PESOS
    "EUR": 1380,  // euro a 1380 pesos
    "BRL": 720,   // real a 720 pesos
    "JPY": 5   // yenes a 5 pesos
};

// Definir nombres completos de las monedas
const nombresMonedas = {
    "USD": "Dólares estadounidenses",
    "EUR": "Euros",
    "BRL": "Reales",
    "JPY": "Yenes"
};

// Muestro opciones de monedas
let moneda = prompt(`${nombre}, elige la moneda (con las siglas) con la que vas a comprar:\nUSD - Dólares\nEUR - Euros\nBRL - Reales\nJPY - Yenes`);

// paso a mayúsculas
moneda = moneda.toUpperCase();

// verifico que moneda es
if (tasasConversion[moneda]) {
    // guardo 
    let nombreMoneda = nombresMonedas[moneda];
    
    // le solicito el monto , tomo si es decimal
    let monto = parseFloat(prompt(`${nombre} podes ingresa el monto en ${nombreMoneda}:`));
    
    // Realizo la conversión
    let conversion = monto * tasasConversion[moneda];
    
    // Mostro el valo en pesos 
    alert(`${nombre} el monto de ${monto} ${nombreMoneda} equivale a ${conversion.toFixed(2)} pesos (argentinos).`);
    
    // Aquí puedes continuar con el resto del código (promociones, etc.)
} else {
    alert(`Moneda " ${moneda} " no es válida. Por favor, elige entre USD, EUR, BRL, o JPY.`);
}

let verPromociones = prompt("¿Deseas ver nuestras promociones disponibles? (Sí/No)").toLowerCase();

if (verPromociones === "sí" || verPromociones === "si") {

    let enviarCorreo = prompt(`${nombre} por favor ingresa tu correo electronico : `)
    alert(` te enviamos a tu correo ${enviarCorreo}  PROMOCIONES  de Nuestro Negocio y  también con un Cupon de Descuento para tu primer COMPRA!:)` )
}
    else
    {
        alert(`Muchas Gracias, por VISITAR nuestra WEB!`) 
    }
