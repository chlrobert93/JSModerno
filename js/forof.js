const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
];

for (let producto of carrito) {
  console.log(producto.nombre);
}
