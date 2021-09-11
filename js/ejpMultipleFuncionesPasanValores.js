function sumar(a,b){
   return a + b;

}


const resultado = sumar(2,3);

console.log(resultado);


//Ejemplo másavanzado
let total = 0;
function agregarCarrito(precio){
  return total += precio;
}

function calcularDescuento(total){
  return total * 0.50;
}

total = agregarCarrito(300);
//total = agregarCarrito(100);
//total = agregarCarrito(600);

const totalPagar = calcularDescuento(total);

console.log(`El total a pagares de ${totalPagar}`);


console.log(total);