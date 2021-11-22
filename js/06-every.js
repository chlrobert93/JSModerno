const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Talevisión', precio: 100 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },             
];


//every todos los elementos de un arreglo debe de cumplir esa condición para que regeres un true
const resultado = carrito.every( producto => producto.precio < 500 );
console.log(resultado);

//some revisa que al menso uno cumpla la condición
const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado2);
