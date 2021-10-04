import { red } from "./capitales_JSON.js";

let cap_inicio,
  cap_final,
  i = 0;
let encontrado = false;
let pila_ruta = new Array();
let visitados = new Array();
let sinconex = new Array();
let ciudades = new Array(); //array para graficar
let registro_busquedas = new Array();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let inicioCap = document.getElementById("icap");
let finalCap = document.getElementById("fcap");
let formulario = document.getElementById("Capitales");

let ruta = document.getElementById("ruta");
let registro = document.getElementById("registro");
const fragment = document.createDocumentFragment();
const fragment2 = document.createDocumentFragment();

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Inicio: " + inicioCap.value);
  console.log("Final: " + finalCap.value);
  cap_inicio = inicioCap.value;
  cap_final = finalCap.value;

  borrarListaRuta();

  reset();
  encontrarNodo(cap_inicio);
  encontrarNodo(cap_final);

  if (pila_ruta[0].Conexion.length == 0 || pila_ruta[1].Conexion.length == 0) {
    console.log("No hay rutas disponibles");
    const itemList = document.createElement("LI");
    itemList.textContent = "No hay rutas disponibles";
    ruta.appendChild(itemList);
  } else {
    pila_ruta.pop(pila_ruta[1]);
    visitados.pop(visitados[1]);
    busqueda();
  }
});

function busqueda() {
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
      let temp = pila_ruta.slice();
      registro_busquedas.push(temp);
    }
  }
  console.log("iteraciones: ", i);
  console.log(pila_ruta);
  dibujito(pila_ruta);
  mostrarListaRuta();
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

function dibujito(arreglo) {
  ctx.fillStyle = "#ffffff00";
  ctx.fillRect(0, 0, c.width, c.height);

  let x = 0;
  let y = 0;
  let x2 = 0;
  let y2 = 0;
  let count = 1;

  ciudades = arreglo;
  console.log(ciudades);

  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();

  function dibruta(x, y, x2, y2) {
    ctx.setLineDash([7, 7]);
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  for (let i = 0; i < ciudades.length - 1; i++) {
    x = ciudades[i].coordenadas[0];
    y = ciudades[i].coordenadas[1];

    x2 = ciudades[i + 1].coordenadas[0];
    y2 = ciudades[i + 1].coordenadas[1];

    setTimeout(dibruta, 500 * count++, x, y, x2, y2);
  }

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 5;
  ctx.setLineDash([1, 1]);

  //GRAFICAR PUNTOS RUTA
  for (let i = 0; i < ciudades.length; i++) {
    x = ciudades[i].coordenadas[0];
    y = ciudades[i].coordenadas[1];

    ctx.beginPath();
    ctx.strokeStyle = "#05512d";
    ctx.fillStyle = "#05512d";
    ctx.arc(x, y, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();
  }

  // dibruta(ciudades);
}
function mostrarListaRuta() {
  for (const capital of pila_ruta) {
    const itemList = document.createElement("LI");
    itemList.textContent = capital.Capital;
    fragment.appendChild(itemList);
  }
  ruta.appendChild(fragment);
  let ruta_registro = "";
  for (const item of registro_busquedas) {
    ruta_registro = "";
    for (let capital of item) {
      console.log(capital.Capital);
      ruta_registro = ruta_registro + " " + capital.Capital + ",";
    }
    console.log("ruta:" + ruta_registro);
    const itemList = document.createElement("LI");
    itemList.textContent = ruta_registro;

    fragment2.appendChild(itemList);
  }
  registro.appendChild(fragment2);
}
function borrarListaRuta() {
  while (ruta.firstChild) {
    ruta.removeChild(ruta.firstChild);
  }
  while (registro.firstChild) {
    registro.removeChild(registro.firstChild);
  }
}
