const producto = 'Monitor 20 Pulgadas';

console.log(producto);

//Para remplazar   
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));


//Para cortar   
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

//Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.subtring(2,1));


//Cortar la primera letra
const usuario = "Juan";
console.log(ususario.substring(0,1));
console.log(usuario.charAt(0)); 