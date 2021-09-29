import { red } from "./capitales_JSON.js";

let cap_inicio = "medellin";
let cap_final = "bogota";
let encontrado = false;
let pila = new Array();
let ruta_resultante = new Array();

for (let i = 0; i < red.length; i++) {
  let capital = red[i].Capital;
  // console.log(capital);
  let conexiones = red[i].Conexion.length;
  // console.log("Capital=" + capital + " \n conexiones=" + conexiones);
  if (capital == cap_inicio) {
    pila.push(red[i]);

    ruta_resultante.push(red[i]);
    // console.log(pila[0].Conexion);
  }
}

while (pila.length != 0 && encontrado == false) {
  ruta_resultante.push(cap_inicio);
  if (ruta_resultante) {
  }
  console.log(pila[0].Conexion[0]);
  pila[0].Conexion[0];
  break;
}
console.log(pila);
// console.log(ruta_resultante);
