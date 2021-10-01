import { red } from "./capitales_JSON.js";
let cap_inicio,
  cap_final,
  i = 0;
let encontrado = false;
let pila_ruta = new Array();
let visitados = new Array();
let sinconex = new Array();

let inicioCap = document.getElementById("icap");
let finalCap = document.getElementById("fcap");
let formulario = document.getElementById("Capitales");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Inicio: " + inicioCap.value);
  console.log("Final: " + finalCap.value);
  cap_inicio = inicioCap.value;
  cap_final = finalCap.value;
  reset();
  busqueda();
});

function busqueda() {
  encontrarNodo(cap_inicio);
  while (pila_ruta.length != 0 && encontrado == false) {
    i++;
    
    let estado = recorreHijos();
    if (!estado) {
      sinconex.push(pila_ruta[pila_ruta.length - 1]);

      while (sinconex.includes(pila_ruta[pila_ruta.length - 1])) {
        pila_ruta.pop(pila_ruta[pila_ruta.length - 1]);
      }
    }
    if (pila_ruta[pila_ruta.length - 1].Capital == cap_final) {
      encontrado = true;
      console.log("yaaaa");
    }
  }
  console.log("iteraciones: ", i);
  console.log(pila_ruta);
}

function encontrarNodo(referencia) {
  for (let i = 0; i < red.length; i++) {
    let capital = red[i].Capital;

    if (capital == referencia) {
      visitados.push(red[i].Capital);
      pila_ruta.push(red[i]);
    }
  }
}
function recorreHijos() {
  let nodo = pila_ruta[pila_ruta.length - 1];
  for (let i = 0; i < nodo.Conexion.length; i++) {
    if (
      nodo.Conexion[i] &&
      visitados.includes(nodo.Conexion[i].capital) == false
    ) {
      encontrarNodo(nodo.Conexion[i].capital);
      return true;
      break;
    }
    if (i == nodo.Conexion.length - 1) {
      return false;
    }
  }
}
function reset() {
  pila_ruta.splice(0, pila_ruta.length);
  visitados.splice(0, visitados.length);
  sinconex.splice(0, sinconex.length);
  encontrado = false;
  i = 0;
}
