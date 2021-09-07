const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Celular", precio: 700 },
];

for (let i = 0; i < carrito.length; i++) {
  //console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//Metodo
//carrito.forEach

//Función
//hola();

carrito.forEach(function (product) {
  //console.log(`${product.nombre} - precio ${product.precio}`);
});

//p -- Es cualquier variable descriptiva es el objecto de carrito
//carrito es el array

carrito.forEach((p) => console.log(p.nombre + " - precio " + p.precio));
