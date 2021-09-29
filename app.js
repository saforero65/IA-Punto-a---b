var map = new Datamap({
  element: document.getElementById("colombia"),
  scope: "colombia",
  responsive: true, //if true, call `resize()` on the map object when it should adjust it's size
  done: function () {}, //callback when the map is done drawing

  //dataType: 'csv', //for use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
  //dataUrl: '', //if not null, datamaps will attempt to fetch this based on dataType ( default: json )
  dataType: "csv",
  dataUrl: "col-data.csv",
  data: {},

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
