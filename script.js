import { red } from "./capitales_JSON.js";

var getData = function(){
  var icap = document.getElementById("icap").value();
  var fcap = document.getElementById("fcap").value();
  console.log(icap+" "+fcap);
}

let cap_inicio = "bogota";
let cap_final = "medellin";
let encontrado = false;
let visitados = new Array();
let lista = new Array();
let sinconex = new Array();
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
    
    console.log(lista);
    //visitados.pop(visitados[visitados.length - 3]);
    sinconex.push(visitados[visitados.length - 1]);
    
    while(sinconex.includes(visitados[visitados.length - 1])){
      visitados.pop(visitados[visitados.length - 1])
      console.log(sinconex);
      console.log(visitados);
    }
    
    
  }
  if (visitados[visitados.length - 1].Capital == cap_final ){
    encontrado = true;
  }

}
console.log("yaaaa");
console.log(visitados);