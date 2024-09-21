
// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24.301 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 32.050 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40.139 },
  { text: "Ella sabía que él sabía", time: 46.100 },
  { text: "Que algún día pasaría", time: 50.099 },
  { text: "Que vendría a buscarla", time: 52.200 },
  { text: "Con sus flores amarillas", time: 54.200 },
  { text: "No te apures, no detengas", time: 59.998 },
  { text: "El instante del encuentro", time: 62.124 },
  { text: "Está dicho que es un hecho", time: 64.013},
  { text: "No la pierdas, no hay derecho", time: 65.999 },
  { text: "No te olvides que la vida", time: 67.992 },
  { text: "Casi nunca está dormida", time: 71.898 },
  { text: " ", time: 75.946 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 94.299 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 102.196 },
  { text: "Él se acercó de repente la miro tan de frente", time: 109.996 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 117.989 },
  { text: "Ella sabía que él sabía", time: 124.003 },
  { text: "Que algún día pasaría", time: 126.900 },
  { text: "Que vendría a buscarla", time: 128.905 },
  { text: "Con sus flores amarillas", time: 130.982 },
  { text: "No te apures, no detengas", time: 136.753 },//
  { text: "El instante del encuentro", time: 138.957 },
  { text: "Está dicho que es un hecho", time: 140.913 },
  { text: "No la pierdas, no hay derecho", time: 142.769 },
  { text: "No te olvides que la vida", time: 144.719 },
  { text: "Casi nunca está dormida", time: 148.638 },
  { text: " ", time: 153.081 },
  { text: "Ella sabía que él sabía", time: 169.490 },
  { text: "Que algún día pasaría", time: 172.231 },
  { text: "Que vendría a buscarla", time: 174.211 },
  { text: "Con sus flores amarillas", time: 176.180 },
  { text: "No te apures, no detengas", time: 182.024 },
  { text: "El instante del encuentro", time: 184.046 },
  { text: "Está dicho que es un hecho", time: 186.131 },
  { text: "No la pierdas, no hay derecho", time: 188.008 },
  { text: "No te olvides que la vida", time: 189.964 },
  { text: "Casi nunca está dormida", time: 193.907 },
  { text: "Ella sabía que él sabía", time: 198.819 },
  { text: "Él sabía, ella sabía", time: 201.711 },
  { text: "Que él sabía, ella sabía", time: 203.755 },
  { text: "Y se olvidaron de sus flores amarillas", time: 205.662 },
  { text: " ", time: 214.275 },
];
audio.ontimeupdate = function() {
  var currentTime = audio.currentTime;

  // Encuentra la línea actual basada en el tiempo preciso
  var currentLine = lyricsData.find(
    (line, index) => currentTime >= line.time && 
   (index === lyricsData.length - 1 || currentTime < lyricsData[index + 1].time)
  );

  if (currentLine) {
    // Actualiza el texto de las letras de manera instantánea
    lyrics.innerHTML = currentLine.text;
  } else {
    // Si no hay una línea actual, vacía el contenido
    lyrics.innerHTML = "";
  }
};
//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);