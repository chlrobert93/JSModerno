const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción ${id}`);
  },

  pausar: function () {
    console.log("pausando...");
  },

  borrar: function(id){
    console.log(`Borrando canción... ${id}`);
  },
  crearPlayList: function(genero){
    console.log(`PLay List de ${genero}`);
  },
  reproducirPlayList: function(nombre){
    console.log(`Reproduciendo la pleylist ${nombre}`)
  }
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(2);
reproductor.crearPlayList('Rock');
reproductor.crearPlayList('90 y 80 ');
reproductor.reproducirPlayList('Heavy Metal');