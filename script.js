import { red } from "./busqueda-profundidad.js";

let cap_inicio = "Medellin";
let cap_final = "Bogota";
let ruta = [];

for (let i = 0; i < red.length; i++) {
  let capital = red[i].Capital;
  if (capital == cap_inicio) {
    console.log(red[i]);
  }
}
