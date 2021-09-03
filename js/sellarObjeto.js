//No permitir malas practicas en este archivo
"use strict"

const producto = {
     nombre: "Monitor 30 Pulgadas",
     precio: 5000,
     disponible: true,
}


//No se puede eliminar ni agregar propiedades, solo 
//Se puede modificar
Object.seal(producto);

producto.disponible = false;
//producto.image = "image.jpg";
//delete producto.precio;

console.log(producto);


//Saber si un objecto esta sellado

console.log(Object.isSealed(producto));


