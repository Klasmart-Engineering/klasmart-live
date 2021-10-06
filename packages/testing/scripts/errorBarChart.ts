import { v4 as uuid } from 'uuid';

export const ERROR_BAR_CHART = String.raw`
function errorBarChart(stats) {
  const margin = {top: 30, right: 50, bottom: 70, left: 50};
  const width = 800 - margin.left - margin.right;
  const height = 800 - margin.top - margin.bottom;
    
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

  // Index === Scenario number
  const data = [];
  let clients = new Set();
  for (const { scenario, name, errors: scenarioErrors } of stats) {
    const dataForScenario = {};
    for (const [numOfClients, e] of Object.entries(scenarioErrors)) {
      const count = e.length;
      dataForScenario[numOfClients] = {
        scenario,
        name,
        numOfClients,
        count,
        errors: e
      };
      if (count < min) min = count;
      if (count > max) max = count;
      clients.add(numOfClients.toString());
    }
    data.push(dataForScenario);
  }
  clients = [...clients].sort((a, b) => a - b);

  const subgroups = d3.map(data, function(d) { return d.numOfClients }).keys();

  const svg = d3.select("#" + id)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Set up the tooltip
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
      .html("Number of clients: " + d.numOfClients + "<br/>Scenario: " + d.name + "<br/>Number of errors: " + d.count)
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

  // Set up the chart background
  // svg
  //   .append("rect")
  //   .attr("x",0)
  //   .attr("y",0)
  //   .attr("height", height)
  //   .attr("width", height)
  //   .style("fill", "white")

  // the x-axis
  const segments = width / (stats.length - 1);
  const x = d3.scale.ordinal()
    .domain(stats.map(stats => stats.scenario))
    .range(stats.map((n, i) => { 
      return (segments * i) + 10;
    }));

  const xSubgroup = d3.scale.band()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05]);

  const xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  // the y-axis
  const y = d3.scale.linear()
    .domain([min, max])
    .range([height + margin.top, 0 + margin.top]);

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  const domainColors = [
    '#B20238',
    '#00DA5C',
    '#8931EF',
    '#FF00BD',
    '#0057E9',
    '#077B8A',
    '#F3CA20',
    '#FF5733',
    '#09D3F9'
  ].slice(0, Object.keys(stats[0].data).length);

  const color = d3.scale.ordinal()
    .domain(clients)
    .range(domainColors);

  const title = "Scenario Errors";
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
      .text("Number of errors");		
    
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


  // Set up the legend
  const legendSize = 10;
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

  // Draw bars
  svg.append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.numOfClients) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return { key, value: d[key].count }; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return color(d.key); });
}
`;
