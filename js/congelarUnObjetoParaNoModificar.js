//No permitir malas practicas en este archivo
"use strict"

const producto = {
     nombre: "Monitor 20Pulgadas",
     preacio: 3000,
     disponible: true,
}

//Toma el objecto para que no se modificado
Object.freeze(producto);

//producto.disponible = false;
//producto.image = "image.jpg";
delete producto.precio;
console.log(producto);

//Conocer si esta congelado
console.log(Object.isFrozen(producto));