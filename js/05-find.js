const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Talevisión', precio: 100 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },             
];

//con un foreach
let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index]
    }
});

console.log(resultado);

//con .find
//Resgresa el primer elemento que cumpla la condición
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2);
