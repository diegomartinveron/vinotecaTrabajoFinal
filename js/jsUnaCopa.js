// Solicitar el nombre del visitante
let nombre = prompt("Bienvenido a Una Copa Más, ¿cómo te llamas?").toUpperCase();

// Defino ejemplos de el valor de las monedas en pesos 
const tasasConversion = {
    "USD": 1200,  // Dólar a 1200 pesos
    "EUR": 1380,  // Euro a 1380 pesos
    "BRL": 720,   // Real a 720 pesos
    "JPY": 5      // Yen a 5 pesos
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

// Paso a mayúsculas
moneda = moneda.toUpperCase();

// Verifico que moneda es
if (tasasConversion[moneda]) {
    // Guardo 
    let nombreMoneda = nombresMonedas[moneda];
    
    // Le solicito el monto y tomo si es decimal
    let monto = parseFloat(prompt(`${nombre}, podés ingresar el monto en ${nombreMoneda}:`));
    
    // Realizo la conversión
    let conversion = monto * tasasConversion[moneda];
    
    // Muestro el valor en pesos 
    alert(`${nombre}, el monto de ${monto} ${nombreMoneda} equivale a ${conversion.toFixed(2)} pesos (argentinos).`);
    
    // Preguntar si desea ver promociones
    let verPromociones = prompt("¿Deseas ver nuestras promociones disponibles? (Sí/No)").toLowerCase();

    if (verPromociones === "sí" || verPromociones === "si") {
        // Ofrecer promociones basadas en la cantidad convertida
        switch (true) {
            case (conversion >= 1000 && conversion < 2000):
                alert("Con tu presupuesto, te alcanza para la Promo 1: 2 botellas de vino Malbec.");
                break;
            case (conversion >= 2000 && conversion < 3000):
                alert("Con tu presupuesto, te alcanza para la Promo 2: 3 botellas de vino Malbec + 1 botella de vino blanco.");
                break;
            case (conversion >= 3000):
                alert("Con tu presupuesto, te alcanza para la Promo 3: 5 botellas de vino Malbec + 2 botellas de vino blanco.");
                break;
            default:
                alert("Lo siento :(, no tienes suficiente dinero para las promociones disponibles del día.");
        }

        // Solicitar correo electrónico
        let enviarCorreo = prompt(`${nombre}, por favor ingresa tu correo electrónico:`);
        alert(`Te enviamos a tu correo ${enviarCorreo} las PROMOCIONES de Nuestro Negocio y también un Cupón de Descuento para tu primera COMPRA! :)`);
    } else {
        alert(`¡Muchas gracias por VISITAR nuestra WEB!`);
    }

} else {
    alert(`La moneda "${moneda}" no es válida. Por favor, elige entre USD, EUR, BRL, o JPY.`);
}
