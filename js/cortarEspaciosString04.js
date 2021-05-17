const producto = '          Monitor 20 Pulgadas    ';

console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log(producto.trimStart());
//Eliminar espacio al final
console.log(producto.trimEnd());

//Cortar por los dos lados
console.log(producto.trimStart().trimEnd());

console.log(producto.trim()); 