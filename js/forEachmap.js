//forEach

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar Java Script"];

//pendientes --toma todo el arreglo recorre el areglo y pendiente -- crea una nueva variable

pendientes.forEach((pendiente, indice) => {
  console.log(`${indice} : ${pendiente}`);
});

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
];

//carrito.forEach((producto) => console.log(producto.nombre));

const nuevoArreglo = carrito.forEach((producto) => producto.nombre);

const nuevoArreglo2 = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
