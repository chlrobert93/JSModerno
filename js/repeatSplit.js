const producto  = 'Monitor 20 Pulgadas';


//.repetear va permitir repetir una cadenade texto...

const texto = 'en promoción'.repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(","));

const twet = "Aprendiendo JavaScript #JSModernoConEder";
console.log(twet.split('#'));