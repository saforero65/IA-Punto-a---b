var width = window.innerWidth,
  height = window.innerHeight;

var svg = d3
  .select("mapa")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var projection = d3.geo
  .mercator()
  .scale(1500)
  // Center the Map in Colombia
  .center([-75, 4.5])
  .translate([width / 2, height / 2]);

var geoPath = d3.geo.path().projection(projection);

svg
  .append("g")
  .selectAll("path")
  .data(counties.features)
  .enter()
  .append("path")
  .attr("d", geoPath)
  .attr("class", "county")
  .on("mouseover", function (d) {
    d3.select("h2").text(d.properties.NOMBRE_DPT);
    d3.select(this).attr("class", "county hover");
  })
  .on("mouseout", function (d) {
    d3.select("h2").text("");
    d3.select(this).attr("class", "county");
  });
