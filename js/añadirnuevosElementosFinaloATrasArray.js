/*const meses = ['Enero', 'Febrero','Marzo'];

//Agregar al final del arreglo(dinámico)
meses.push('Abril');
meses.push('Mayo');

console.table(meses);*/

const carrito = [];


//Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 50,
}

const producto3 = {
    nombre: 'Raton',
    precio: 30,
}

carrito.push(producto2);
carrito.push(producto);


//Agregar hasta el principio
carrito.unshift(producto3);


console.table(carrito);
