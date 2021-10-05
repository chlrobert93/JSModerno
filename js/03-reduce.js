const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio:500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
] 


//Con un foreach
let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);


//Con un reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado)


$(document).ready(function(){
    $("#myBtn1").click(function(){
      $('.toast1').toast('show');
    });
  });


  
$(document).ready(function(){
    $("#myBtn2").click(function(){
      $('.toast2').toast('show');
    });
  });
