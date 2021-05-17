const producto = ' Monitor 20 Pulgadas ';
const precio = ' 30 USD ';

console.log(producto.concat(" "+precio));
console.log(producto + precio);

console.log(producto + "Con un precio de: " + precio);
console.log("El producto" + producto + "Tiene un precio de" + precio);

//Serecomienda para no tener problemas cuando sea grande 
//La más nueva E6
console.log(`El producto${producto} tiene un precio de $ ${precio}`);
