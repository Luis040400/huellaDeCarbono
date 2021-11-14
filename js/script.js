let option = document.getElementById("option");
let cantidad = document.getElementById("cantidad");

function calcular() {
  option.value;
  cantidad.value;
  let resultado;
  let a = cantidad.value;

  if (option.value === "energia") {
    resultado = (a * 12 * 0.6798) / 1000;
  } else if (option.value === "agua") {
    resultado = (a * 12 * 0.788) / 1000;
  } else if (option.value === "papel") {
    resultado = (a * 12 * 3 * 2.3) / 1000;
  } else {
    resultado = ((a * 12 * 3.79 * 0.85 * 43) / 1000000) * 72.6;
  }
  document.getElementById("resultado").innerHTML =
    "<h2>" + " Resultado: " + resultado.toFixed(3) + " Ton CO2/año" + "</h2>";
}
