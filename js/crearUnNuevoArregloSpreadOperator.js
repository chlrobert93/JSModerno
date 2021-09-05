const carrito = [];

//Definir un producto

const producto = {
    nombre: "Teclado",
    precio: 440,
}

const producto2 = {
    nombre: "Cargador",
    precio: 1000,
}

const producto3 = {
    nombre: "USB",
    precio: 500,
}

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);