
const meses = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio:500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
] 

//Comprovar si un valor existe en Obj y Array
carrito.forEach((mes) => {
  console.log(mes.nombre);
  if (mes.nombre == "Tablet") {
    console.log(`Si exite el producto ${mes.nombre}`);
  }b
});

//Solo de arreglo
const resultado = meses.includes('Diciembre');
console.log(resultado);


//En un arreglo de objecto se utiliza .some
const existe = carrito.some((producto) => {
  return producto.nombre === 'Monitor Curvo';
});

//En un arreglo
const existe2 = meses.some(mes => mes === 'Febrero');

console.log(existe);
console.log(existe2);
