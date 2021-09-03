const producto = {
     nombre: "Monitor 20 Pulgadas",
     precio: 300,
     disponible: true,
}

const medidas ={
     peso: '1kg',
     medidas: '1m'
}


console.log(producto)
console.log(medidas)

const resultado = Object.assign(producto, medidas);

console.log(resultado);