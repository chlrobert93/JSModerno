const producto = {
  nombre: "Monitor 20",
  precio: 300,
  disponible: true,
  informacion: {
    medidas:{
    peso: '1kg',
    medida: '1m',

  },

  fabricacion:{
    pais:'China'
  }
 }
};

console.log(producto);

//console.log(producto.informacion);
//console.log(producto.informacion.peso);
//console.log(producto.informacion.medida);

console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);



