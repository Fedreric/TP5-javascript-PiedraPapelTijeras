let opciones = ["piedra", "papel", "tijera"];
let resultado = "";

do{
  // let eleccionUsuario = prompt("Elige piedra, papel o tijera").toLowerCase();
  while (!opciones.includes(eleccionUsuario)) {
    eleccionUsuario = prompt("Eleccion invalida. Elige piedra, papel o tijera").toLowerCase();
  }

  let eleccionPC = opciones[Math.floor(Math.random() * opciones.length)];

  if (eleccionUsuario === eleccionPC) {
    resultado = "Empate";
  } else if (
    (eleccionUsuario === "piedra" && eleccionPC === "tijera") ||
    (eleccionUsuario === "papel" && eleccionPC === "piedra") ||
    (eleccionUsuario === "tijera" && eleccionPC === "papel")
  ) {
    resultado = "Ganaste";
  } else {
    resultado = "Perdiste";
  }

  alert(`Elegiste ${eleccionUsuario}. La PC eligio ${eleccionPC}. ${resultado}!`);

}while(confirm('¿Quieres jugar otra vez?'));
