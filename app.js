var map = new Datamap({
  element: document.getElementById("colombia"),
  scope: "colombia",
  responsive: true, //if true, call `resize()` on the map object when it should adjust it's size
  done: function () {}, //callback when the map is done drawing

  fills: {
    def: "#dddddd",
    C1: "#ffa4a9",
    C2: "#cc6674",
    C3: "#993341",
    C4: "#66000e",
    defaultFill: "#dddddd",
  },

  geographyConfig: {
    dataUrl: "colombia.topo.json",
  },

  setProjection: function (element) {
    var projection = d3.geo
      .mercator()
      .center([-74, 3])
      .scale(element.offsetWidth * 4)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geo.path().projection(projection);
    return { path: path, projection: projection };
  },
});

window.addEventListener("resize", function (event) {
  map.resize();
});

$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
    $("h1").css("color", "#222222");
  }, 1000);
  //$('#exampleModalCenter').modal('show');
});
