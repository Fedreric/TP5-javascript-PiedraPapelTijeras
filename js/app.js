let opciones = ["piedra", "papel", "tijera"];
let eleccionUsuario;
let resultado = "";
let bandera = false;
const btnPiedra = document.getElementById('btnPiedra');
const btnPapel = document.getElementById('btnPapel');
const btnTijera = document.getElementById('btnTijera');
let contenedorGanador = document.getElementById('contenedorGanador');

btnPiedra.addEventListener('click', piedra);
btnPapel.addEventListener('click', papel);
btnTijera.addEventListener('click', tijera);

function piedra() { eleccionUsuario = 0; bandera = true; juego();}
function papel() { eleccionUsuario = 1; bandera = true; juego();}
function tijera() { eleccionUsuario = 2; bandera = true; juego();}


function juego (){
  if (bandera === true) {
    let eleccionPC = opciones[Math.floor(Math.random() * opciones.length)];
  
    if (opciones[eleccionUsuario] === eleccionPC) {
      resultado = "Empate";
    } else if (
      (opciones[eleccionUsuario] === "piedra" && eleccionPC === "tijera") ||
      (opciones[eleccionUsuario] === "papel" && eleccionPC === "piedra") ||
      (opciones[eleccionUsuario] === "tijera" && eleccionPC === "papel")
    ) {
      resultado = "Ganaste";
    } else {
      resultado = "Perdiste";
    }
  
      contenedorGanador.innerHTML = `Elegiste ${opciones[eleccionUsuario]}. La PC eligio ${eleccionPC}. ${resultado}!`;
  }
}

