traerDatos();

function traerDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "red.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      let res = document.querySelector("#res");
      res.innerHTML = "";
      console.log(datos);
      let conexion;
      for (let item of datos) {
        // console.log(item.Capital);
        if (item.Conexion.length > 0) {
          conexion = "";
          for (let capital of item.Conexion) {
            conexion = conexion + " " + capital.Capital + ",";
          }
        } else {
          conexion = "no tiene";
        }
        res.innerHTML += `
        <tr>
        <td>${item.Capital}</td>
        <td>${item.Conexion.length}</td>
        <td>${conexion}</td>
        `;
      }
    }
  };
}
