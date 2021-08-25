const producto = {
 
    nombre: "Monitor 20",
    precio: 300,
    disponible: true,
}


//Agregar nuevas propiedades al objecto
producto.imagen = "imagen.jpg";

//Eliminar propiedades del objecto
delete producto.disponible;

console.log(producto);
