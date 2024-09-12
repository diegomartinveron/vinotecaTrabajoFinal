let totalCarrito = 0;
let cantidadVinos = 0;

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

    // Si tienes una función para actualizar visualmente el carrito, llámala aquí
    alert("El carrito ha sido vaciado.");
});