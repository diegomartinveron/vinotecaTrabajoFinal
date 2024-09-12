// crre este js para ir acomodando mis ideas se que no es lo aconsejable pero para ir comenzando

// creao las variables para comenzar a utilizar en mi totalCarrito. lo que hace es sumar y multiplicar 

let totalCarrito = 0;
let cantidadVinos = 0;


// utilizo el bonton de carrito
document.querySelectorAll('.btn-carrito').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const cantidad = parseInt(document.querySelectorAll('.quantity-control input')[index].value);
        const precio = parseFloat(document.querySelectorAll('.product-price')[index].textContent.replace('$', '').replace(',', '.'));

        totalCarrito += precio * cantidad;
        cantidadVinos += cantidad;

        document.getElementById('totalCarrito').textContent = totalCarrito.toFixed(2);
        document.getElementById('cantidadVinos').textContent = cantidadVinos;
    });
});

document.getElementById('borrarCarrito').addEventListener('click', () => {
    totalCarrito = 0;
    cantidadVinos = 0;

    document.getElementById('totalCarrito').textContent = totalCarrito.toFixed(2);
    document.getElementById('cantidadVinos').textContent = cantidadVinos;

   
    alert("El carrito ha sido vaciado.");
});