import { red } from "./capitales_JSON.js";
let cap_inicio;
let cap_final;
let inicioCap = document.getElementById("icap");
let finalCap = document.getElementById("fcap");
let formulario = document.getElementById("Capitales");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inicioCap.value);
  console.log(finalCap.value);
  cap_inicio = inicioCap.value;
  cap_final = finalCap.value;
  reset();
  busqueda();
});

let encontrado = false;
let visitados = new Array();
let lista = new Array();
let sinconex = new Array();
let i = 0;

function busqueda() {
  console.log(cap_final + cap_inicio);
  encontrarNodo(cap_inicio);

  while (visitados.length != 0 && encontrado == false) {
    i++;
    console.log(i);
    if (
      visitados[visitados.length - 1].Conexion[0] &&
      lista.includes(visitados[visitados.length - 1].Conexion[0].capital) ==
        false
    ) {
      encontrarNodo(visitados[visitados.length - 1].Conexion[0].capital);
      console.log("entro if 1");
      // console.log(visitados);
      // console.log(lista);
    } else if (
      visitados[visitados.length - 1].Conexion[1] &&
      lista.includes(visitados[visitados.length - 1].Conexion[1].capital) ==
        false
    ) {
      encontrarNodo(visitados[visitados.length - 1].Conexion[1].capital);
      console.log("entro if 2");
      // console.log(visitados);
      // console.log(lista);
    } else if (
      visitados[visitados.length - 1].Conexion[2] &&
      lista.includes(visitados[visitados.length - 1].Conexion[2].capital) ==
        false
    ) {
      encontrarNodo(visitados[visitados.length - 1].Conexion[2].capital);
      console.log("entro if 3");
      // console.log(visitados);
      // console.log(lista);
    } else if (
      visitados[visitados.length - 1].Conexion[3] &&
      lista.includes(visitados[visitados.length - 1].Conexion[3].capital) ==
        false
    ) {
      encontrarNodo(visitados[visitados.length - 1].Conexion[3].capital);
      console.log("entro if 4");
      // console.log(visitados);
      // console.log(lista);
    } else if (
      visitados[visitados.length - 1].Conexion[4] &&
      lista.includes(visitados[visitados.length - 1].Conexion[4].capital) ==
        false
    ) {
      encontrarNodo(visitados[visitados.length - 1].Conexion[4].capital);
      console.log("entro if 5");
      // console.log(visitados);
      // console.log(lista);
    } else {
      console.log(lista);
      //visitados.pop(visitados[visitados.length - 3]);
      sinconex.push(visitados[visitados.length - 1]);

      while (sinconex.includes(visitados[visitados.length - 1])) {
        visitados.pop(visitados[visitados.length - 1]);
        console.log(sinconex);
        console.log(visitados);
      }
    }
    if (visitados[visitados.length - 1].Capital == cap_final) {
      encontrado = true;
      console.log("yaaaa");
      console.log(visitados);
    }
  }
}

function encontrarNodo(referencia) {
  for (let i = 0; i < red.length; i++) {
    let capital = red[i].Capital;

    if (capital == referencia) {
      lista.push(red[i].Capital);
      visitados.push(red[i]);
    }
  }
}
function reset() {
  visitados.splice(0, visitados.length);
  lista.splice(0, lista.length);
  sinconex.splice(0, sinconex.length);
  console.log(visitados);
  console.log(lista);
  console.log(sinconex);
  encontrado = false;
}
