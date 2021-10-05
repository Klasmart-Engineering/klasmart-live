import { v4 as uuid } from 'uuid';

export const SCATTER_PLOT = String.raw`
function scatterplot(stats) {
  var margin = {top: 30, right: 50, bottom: 70, left: 50};
  var width = 800 - margin.left - margin.right;
  var height = 800 - margin.top - margin.bottom;
    
  let min = Infinity
      max = -Infinity;

  const id = "${(() => {
    let id = uuid().toString().replace('-', '');
    while (id.includes('-')) {
      id = id.replace('-', '');
    }
    return 'graph-' + id.slice(0, 8);
  })()}";

  d3.select("body")
    .append("div")
    .attr("id", id);

  const data = [];
  let clients = new Set();
  for (const { scenario, data: sData, name } of stats) {
    for (const [numOfClients, d] of Object.entries(sData)) {
      for (const time of d) {
        data.push({
          scenario,
          numOfClients,
          time,
          name
        });
        if (time < min) min = time;
        if (time > max) max = time;
      }
      clients.add(numOfClients.toString());
    }
  }
  clients = [...clients].sort((a, b) => a - b);

  const svg = d3.select("#" + id)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const Tooltip = d3.select("#" + id)
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px");

  const mouseover = function(d) {
    Tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  const mousemove = function(d) {
    Tooltip
      .html("Number of clients: " + d.numOfClients + "<br/>Scenario: " + d.name + "<br/>Time: " + d.time + "ms")
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  const mouseleave = function(d) {
    Tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)
  }


  svg
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height", height)
    .attr("width", height)
    .style("fill", "white")
    
    // the x-axis
    const segments = width / (stats.length - 1);
    const x = d3.scale.ordinal()
      .domain(stats.map(stats => stats.scenario))
      .range(stats.map((n, i) => { 
        return (segments * i) + 10;
      }));

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    // the y-axis
    var y = d3.scale.linear()
      .domain([min, max])
      .range([height + margin.top, 0 + margin.top]);
    
    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

    const domainColors = [
      '#8931EF',
      '#FF00BD',
      '#0057E9',
      '#077B8A',
      '#00DA5C',
      '#B20238',
      '#F3CA20',
    ].slice(0, Object.keys(stats[0].data).length);

    const color = d3.scale.ordinal()
      .domain(clients)
      .range(domainColors);

    const title = "Scenario timings";
    // add a title
    svg.append("text")
          .attr("x", (width / 2))
          .attr("y", 0 + (margin.top / 2))
          .attr("text-anchor", "middle")  
          .style("font-size", "18px")
          .text(title);
   
     // draw y axis
    svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
      .append("text") // and text1
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-size", "12px") 
        .text("Time to propagate (ms)");		
    
    // draw x axis	
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height  + margin.top + 10) + ")")
        .call(xAxis)
      .append("text")             // text label for the x axis
          .attr("x", (width / 2) )
          .attr("y",  15 )
      .attr("dy", "1.2em")
          .style("text-anchor", "middle")
      .style("font-size", "12px") 
          .text("Scenario number"); 


      const legendSize = 10;
      // Add legend
      svg.selectAll("mydots")
        .data(clients)
        .enter()
        .append("rect")
          .attr("x", 50)
          .attr("y", function(d,i){ return 50 + i*(legendSize + 5)}) // 100 is where the first dot appears. 25 is the distance between dots
          .attr("width", legendSize)
          .attr("height", legendSize)
          .style("fill", function(d){ return color(d)})

      svg.selectAll("mylabels")
        .data(clients)
        .enter()
        .append("text")
          .attr("x", 50 + legendSize*1.2)
          .attr("y", function(d,i){ return 50 + i*(legendSize + 5) + (legendSize / 2)}) // 100 is where the first dot appears. 25 is the distance between dots
          .style("fill", function(d){ return color(d)})
          .text(function(d){ return d + " users"; })
          .attr("text-anchor", "left")
          .style("alignment-baseline", "middle")

   // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.scenario); } )
      .attr("cy", function (d) { return y(d.time); } )
      .attr("r", 2)
      .style("fill", function (d) { return color(d.numOfClients) } )
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
}
`;
