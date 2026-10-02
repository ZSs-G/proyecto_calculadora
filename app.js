import { suma } from './funciones/suma.js';
import { promedio } from './funciones/promedio.js';
import { multiplicar } from './funciones/multiplicacion.js';
import { tangente } from './funciones/tangente.js';

document.addEventListener("DOMContentLoaded", () => {

  const selectOperacion = document.getElementById("operacion");
  const inputValor2 = document.getElementById("valor2");
  
  const labelValor2 = document.querySelector("label[for='valor2']") || inputValor2.previousElementSibling;

  selectOperacion.addEventListener("change", () => {
    if (selectOperacion.value === "tangente") {
      inputValor2.value = "";             
      inputValor2.style.display = "none"; 
      if (labelValor2) labelValor2.style.display = "none";
    } else {
      inputValor2.style.display = "block";
      inputValor2.disabled = false;
      if (labelValor2) labelValor2.style.display = "block"; 
    }
  });

  document.getElementById("btnCalcular").addEventListener("click", calcular);

});

function calcular() {

  const op = document.getElementById("operacion").value;
  const v1 = parseFloat(document.getElementById("valor1").value);
  const v2 = parseFloat(document.getElementById("valor2").value);

  if (op === "tangente"){
    if (isNaN(v1)){
      alert("Ingrese un valor válido");
      return;
    }
  }else {
    if (isNaN(v1) || isNaN(v2)) {
      alert("Ingrese valores válidos");
      return;
    }
  }

  let resultado;

  if (op === "suma") {
    resultado = suma(v1, v2);
  } else if (op === "promedio") {
    resultado = promedio(v1, v2);
  } else if (op === "multiplicacion"){
    resultado = multiplicar(v1, v2);
  } else if (op === "tangente"){
    resultado = tangente(v1, v2);
  } else{
    alert("Operación no válida");
    return
}

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}