import { red } from "./capitales_JSON.js";

let cap_inicio,
  cap_final,
  i = 0;
let encontrado = false;
let pila_ruta = new Array();
let visitados = new Array();
let sinconex = new Array();
let ciudades = new Array();
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

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
  dibujito(pila_ruta);
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
  ciudades.splice(0, ciudades.length);

  ctx.clearRect(0, 0, 500, 600);

  encontrado = false;
  i = 0;
}

function dibujito(arreglo){
  ctx.fillStyle = "#50336700";
  ctx.fillRect(0, 0, c.width, c.height);

  let x = 0;
  let y = 0;
  let x2 = 0;
  let y2 = 0;
  let count = 1;

  ciudades = arreglo;
  console.log(ciudades);

  ctx.lineWidth = 1;
  ctx.setLineDash([5,5]);
  ctx.beginPath();
      
  function dibruta(x, y, x2, y2) {
      ctx.setLineDash([7,7]);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
  }

  for (let i = 0; i < (ciudades.length)-1; i++) {

      x = ciudades[i].coordenadas[0];
      y = ciudades[i].coordenadas[1];

      x2 = ciudades[i+1].coordenadas[0];
      y2 = ciudades[i+1].coordenadas[1];

      setTimeout(dibruta, 700 * count++, x, y, x2, y2);

  }


  ctx.strokeStyle = '#000';
  ctx.lineCap = "round";
  ctx.lineJoin='round'
  ctx.fillStyle = "#000000";
  ctx.lineWidth = 5;
  ctx.setLineDash([1,1]);

  // for (let i = 0; i < (red.length); i++) {

  //     x = red[i].coordenadas[0];
  //     y = red[i].coordenadas[1];

  //     ctx.beginPath();
  //     ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  //     ctx.fill();
  //     ctx.stroke();
  // }

  //GRAFICAR PUNTOS RUTA
  for (let i = 0; i < (ciudades.length); i++) {

      x = ciudades[i].coordenadas[0];
      y = ciudades[i].coordenadas[1];

      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
  }

  // dibruta(ciudades);

}