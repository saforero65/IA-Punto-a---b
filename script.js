import { red } from "./capitales_JSON.js";

let cap_inicio = "medellin";
let cap_final = "bogota";
let encontrado = false;
let visitados = new Array();
let lista = new Array();
let i = 0;

encontrarNodo(cap_inicio);

function encontrarNodo(referencia) {
  for (let i = 0; i < red.length; i++) {
    let capital = red[i].Capital;

    if (capital == referencia) {
      lista.push(red[i].Capital);
      visitados.push(red[i]);
    }
  }
}

while (visitados.length != 0 && encontrado == false) {
  i++;
  console.log(i);
  if (
    visitados[visitados.length - 1].Conexion[0] &&
    lista.includes(visitados[visitados.length - 1].Conexion[0].capital) == false
  ) {
    encontrarNodo(visitados[visitados.length - 1].Conexion[0].capital);
    console.log("entro if 1");
    // console.log(visitados);
    // console.log(lista);
  } else if (
    visitados[visitados.length - 1].Conexion[1] &&
    lista.includes(visitados[visitados.length - 1].Conexion[1].capital) == false
  ) {
    encontrarNodo(visitados[visitados.length - 1].Conexion[1].capital);
    console.log("entro if 2");
    // console.log(visitados);
    // console.log(lista);
  } else if (
    visitados[visitados.length - 1].Conexion[2] &&
    lista.includes(visitados[visitados.length - 1].Conexion[2].capital) == false
  ) {
    encontrarNodo(visitados[visitados.length - 1].Conexion[2].capital);
    console.log("entro if 3");
    // console.log(visitados);
    // console.log(lista);
  } else if (
    visitados[visitados.length - 1].Conexion[3] &&
    lista.includes(visitados[visitados.length - 1].Conexion[3].capital) == false
  ) {
    encontrarNodo(visitados[visitados.length - 1].Conexion[3].capital);
    console.log("entro if 4");
    // console.log(visitados);
    // console.log(lista);
  } else if (
    visitados[visitados.length - 1].Conexion[4] &&
    lista.includes(visitados[visitados.length - 1].Conexion[4].capital) == false
  ) {
    encontrarNodo(visitados[visitados.length - 1].Conexion[4].capital);
    console.log("entro if 5");
    // console.log(visitados);
    // console.log(lista);
  } else {
    console.log(visitados);
    console.log(lista);
    console.log(visitados[visitados.length - 2]);
  }

  if (i == 17) break;
}
