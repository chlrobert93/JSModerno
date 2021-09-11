const reproductor = {
  cancion: '',
  reproducir: (id) => `Reproducioendo canción con el id ${id}`,
  pausar: () => "Pausando...",
  borrar: (id) => `Borrando canción...${id}`,
  crearPlaylist: (nombre) => `Creando la playlist de  ${nombre}`,
  reproducirPlayList: (nombre) => `Reproduciendo la playlist ${nombre}`,

  //Es una forma de agregar valores
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },

  //Obtener valores
  get obtenerCnacion() {
    console.log(`${this.cancion}`);
  },
};


reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCnacion;

console.log(reproductor.reproducir(3));
console.log(reproductor.pausar());
console.log(reproductor.borrar(30));
console.log(reproductor.crearPlaylist("80"));
console.log(reproductor.reproducirPlayList("Metal"));
