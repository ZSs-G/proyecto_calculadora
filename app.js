import { suma } from './funciones/suma.js';
import { promedio } from './funciones/promedio.js';
import { multiplicar } from './funciones/multiplicacion.js';

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("btnCalcular").addEventListener("click", calcular);

});

function calcular() {

  const op = document.getElementById("operacion").value;
  const v1 = parseFloat(document.getElementById("valor1").value);
  const v2 = parseFloat(document.getElementById("valor2").value);

  if (isNaN(v1) || isNaN(v2)) {
    alert("Ingrese valores válidos");
    return;
  }

  let resultado;

  if (op === "suma") {
    resultado = suma(v1, v2);
  } else if (op === "promedio") {
    resultado = promedio(v1, v2);
  } else if (op === "multiplicacion"){
    resultado = multiplicar(v1, v2);
  }else{
    alert("Operación no válida");
    return
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}