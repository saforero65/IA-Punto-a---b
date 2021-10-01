var map = new Datamap({
  element: document.getElementById("colombia"),
  scope: "colombia",
  responsive: true, //if true, call `resize()` on the map

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
