/*const meses = ['Enero', 'Febrero','Marzo'];

//Agregar al final del arreglo(dinámico)
meses.push('Abril');
meses.push('Mayo');

console.table(meses);*/

const carrito = [];

//Definir un producto
const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 50,
};

const producto3 = {
  nombre: "Raton",
  precio: 30,
};


const producto4 = {
    nombre: 'Celular 2',
    precio: 100,
}

//Agregar al final  de un arreglo
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

//Agregar hasta el principio
carrito.unshift(producto3);
console.table(carrito);

/*
//Elimnar último elemento de un arreglo...
carrito.pop();


console.table(carrito);
console.log(carrito);


//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);*/

//Eliminar dos elementos
//carrito.splice(1, 2);
//Eliminar un elemento
carrito.splice(3,1);
console.table(carrito);