/*
export const SCATTER_PLOT = String.raw`
function scatterplot(stats) {
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

  const data = [];
  const p95 = {};
  let clients = new Set();
  for (const { scenario, data: scenarioData, name } of stats) {
    for (const [numOfClients, d] of Object.entries(scenarioData)) {
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
      if (p95[numOfClients] === undefined) p95[numOfClients] = [];
      p95[numOfClients].push({
        scenario,
        numOfClients,
        time: d3.quantile(d, 0.95),
        name
      });
    }
  }
  clients = [...clients].sort((a, b) => a - b);

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

  // Set up the chart background
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

   // Add dots to graph
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
    .on("mouseleave", mouseleave);

  // Add line chart
  for (const n of clients) {
    svg.append("path")
      .attr("class", "line")
      .attr("d", d3.svg.line()
          .x(function(d) { return x(d.scenario) })
          .y(function(d) { return y(d.time) })
          .interpolate('basis')(p95[n])
       )
      .attr("stroke", function(d) { return color(n) });
  }
}
`;
*/

/*
type GraphData = {
  scenario: number;
  numOfClients: string;
  time: number;
  name: string;
};

type P95Data = {
  scenario: number;
  numOfClients: number;
  time: number;
  name: string;
};
*/


function scatterplot(stats) {
  const margin = { top: 30, right: 50, bottom: 70, left: 50 };
  const width = 800 - margin.left - margin.right;
  const height = 800 - margin.top - margin.bottom;

  let min = Infinity;
  let max = -Infinity;

  const id = generateHtmlId();

  d3.select('body').append('div').attr('id', id);

  const data = [];
  const p95 = {};
  const tempClients = new Set();
  for (const { scenario, data: scenarioData, name } of stats) {
    for (const [numOfClients, d] of Object.entries(scenarioData)) {
      for (const time of d) {
        data.push({
          scenario,
          numOfClients,
          time,
          name,
        });
        if (time < min) min = time;
        if (time > max) max = time;
      }
      tempClients.add(parseInt(numOfClients));
      if (p95[numOfClients] === undefined) p95[numOfClients] = [];
      p95[numOfClients].push({
        scenario,
        numOfClients: parseInt(numOfClients),
        time: d3.quantile(d, 0.95) || NaN,
        name,
      });
    }
  }
  const clients = [...tempClients].sort((a, b) => a - b);

  const svg = d3
    .select('#' + id)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Set up the tooltip
  const Tooltip = d3
    .select('#' + id)
    .append('div')
    .style('opacity', 0)
    .attr('class', 'tooltip')
    .style('background-color', 'white')
    .style('border', 'solid')
    .style('border-width', '2px')
    .style('border-radius', '5px')
    .style('padding', '5px');

  const mouseover = function (d) {
    Tooltip.style('opacity', 1);
    d3.select(this).style('stroke', 'black').style('opacity', 1);
  };
  const mousemove = function (event, d) {
    Tooltip.html(
      'Number of clients: ' +
        d.numOfClients +
        '<br/>Scenario: ' +
        d.name +
        '<br/>Time: ' +
        d.time +
        'ms'
    )
      .style('left', d3.pointer(event)[0] + 70 + 'px')
      .style('top', d3.pointer(event)[1] + 'px');
  };
  const mouseleave = function (d) {
    Tooltip.style('opacity', 0);
    d3.select(this).style('stroke', 'none').style('opacity', 0.8);
  };

  // Set up the chart background
  // svg
  //   .append('rect')
  //   .attr('x', 0)
  //   .attr('y', 0)
  //   .attr('height', height)
  //   .attr('width', height)
  //   .style('fill', 'white');

  // the x-axis
  const segments = width / (stats.length - 1);
  const x = d3.scaleOrdinal(
    stats.map((stats) => stats.scenario.toString()),
    stats.map((n, i) => segments * i + 10)
  );
  // svg
  //   .append('g')
  //   .attr('transform', `translate(0,${height})`)
  //   .call(d3.axisBottom(x));

  // const xAxis = d3.svg.axis().scale(x).orient('bottom');

  // the y-axis
  const y = d3
    .scaleLinear()
    .domain([min, max])
    .range([height + margin.top, 0 + margin.top]);

  // const yAxis = d3.svg.axis().scale(y).orient('left');

  const domainColors = [
    '#00DA5C',
    '#8931EF',
    '#FF00BD',
    '#0057E9',
    '#077B8A',
    '#F3CA20',
    '#FF5733',
    '#09D3F9',
    '#B20238',
  ].slice(0, Object.keys(stats[0].data).length);

  const color = d3.scaleOrdinal().domain(clients).range(domainColors);

  const title = 'Scenario timings';
  // add a title
  svg
    .append('text')
    .attr('x', width / 2)
    .attr('y', 0 + margin.top / 2)
    .attr('text-anchor', 'middle')
    .style('font-size', '18px')
    .text(title);

  // draw y axis
  svg.append('g').attr('class', 'y axis').call(d3.axisLeft(y));

  // draw x axis
  svg
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (height + margin.top) + ')')
    .call(d3.axisBottom(x));

  // X-axis label
  svg
    .append('text')
    .attr(
      'transform',
      'translate(' + width / 2 + ' ,' + (height + margin.top + 20) + ')'
    )
    .style('text-anchor', 'middle')
    .attr('dy', '1em')
    .text('Scenario Number');

  // text label for the y axis
  svg
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 0 - margin.left)
    .attr('x', 0 - height / 2)
    .attr('dy', '0.75em')
    .style('text-anchor', 'middle')
    .text('Time to propagate (ms)');

  // Set up the legend
  const legendSize = 10;
  svg
    .selectAll('mydots')
    .data(clients)
    .enter()
    .append('rect')
    .attr('x', 50)
    .attr('y', function (d, i) {
      return 50 + i * (legendSize + 5);
    }) // 100 is where the first dot appears. 25 is the distance between dots
    .attr('width', legendSize)
    .attr('height', legendSize)
    .style('fill', (d) => color(d.toString()));

  svg
    .selectAll('mylabels')
    .data(clients)
    .enter()
    .append('text')
    .attr('x', 50 + legendSize * 1.2)
    .attr('y', function (d, i) {
      return 50 + i * (legendSize + 5) + legendSize / 2;
    }) // 100 is where the first dot appears. 25 is the distance between dots
    .style('fill', (d) => color(d.toString()))
    .text(function (d) {
      return d + ' users';
    })
    .attr('text-anchor', 'left')
    .style('alignment-baseline', 'middle');

  // Add dots to graph
  svg
    .append('g')
    .selectAll('dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function (d) {
      return x(d.scenario.toString());
    })
    .attr('cy', function (d) {
      return y(d.time);
    })
    .attr('r', 2)
    .attr('fill', (d) => color(d.numOfClients))
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseleave', mouseleave);

  // Add line chart
  for (const n of clients) {
    const line = d3
      .line()
      .x((d) => x(d.scenario))
      .y((d) => y(d.time));

    svg
      .append('path')
      .datum(p95[n])
      .attr('class', 'line')
      .attr('stroke', (d) => color(n))
      .attr('d', line);
  }
}

/*
function scatterplot(stats: RawData[]) {
  const margin = { top: 30, right: 50, bottom: 70, left: 50 };
  const width = 800 - margin.left - margin.right;
  const height = 800 - margin.top - margin.bottom;

  let min = Infinity;
  let max = -Infinity;

  const id = generateHtmlId();

  d3.select('body').append('div').attr('id', id);

  const data: GraphData[] = [];
  const p95: Record<string, P95Data[]> = {};
  const tempClients: Set<number> = new Set();
  for (const { scenario, data: scenarioData, name } of stats) {
    for (const [numOfClients, d] of Object.entries(scenarioData)) {
      for (const time of d) {
        data.push({
          scenario,
          numOfClients,
          time,
          name,
        });
        if (time < min) min = time;
        if (time > max) max = time;
      }
      tempClients.add(parseInt(numOfClients));
      if (p95[numOfClients] === undefined) p95[numOfClients] = [];
      p95[numOfClients].push({
        scenario,
        numOfClients: parseInt(numOfClients),
        time: d3.quantile(d, 0.95) || NaN,
        name,
      });
    }
  }
  const clients = [...tempClients].sort((a, b) => a - b);

  const svg = d3
    .select('#' + id)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Set up the tooltip
  const Tooltip = d3
    .select('#' + id)
    .append('div')
    .style('opacity', 0)
    .attr('class', 'tooltip')
    .style('background-color', 'white')
    .style('border', 'solid')
    .style('border-width', '2px')
    .style('border-radius', '5px')
    .style('padding', '5px');

  const mouseover = function (d: GraphData) {
    Tooltip.style('opacity', 1);
    // @ts-ignore
    d3.select(this).style('stroke', 'black').style('opacity', 1);
  };
  const mousemove = function (d: GraphData) {
    Tooltip.html(
      'Number of clients: ' +
        d.numOfClients +
        '<br/>Scenario: ' +
        d.name +
        '<br/>Time: ' +
        d.time +
        'ms'
    )
      // @ts-ignore
      .style('left', d3.pointer(this)[0] + 70 + 'px')
      // @ts-ignore
      .style('top', d3.pointer(this)[1] + 'px');
  };
  const mouseleave = function (d: GraphData) {
    Tooltip.style('opacity', 0);
    // @ts-ignore
    d3.select(this).style('stroke', 'none').style('opacity', 0.8);
  };

  // Set up the chart background
  svg
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('height', height)
    .attr('width', height)
    .style('fill', 'white');

  // the x-axis
  const segments = width / (stats.length - 1);
  const x = d3.scaleOrdinal(
    stats.map((stats) => stats.scenario.toString()),
    stats.map((n, i) => {
      // return segments * i + 10;
      return i;
    })
  );
  // svg
  //   .append('g')
  //   .attr('transform', `translate(0,${height})`)
  //   .call(d3.axisBottom(x));

  // const xAxis = d3.svg.axis().scale(x).orient('bottom');

  // the y-axis
  const y = d3
    .scaleLinear()
    .domain([min, max])
    .range([height + margin.top, 0 + margin.top]);

  // const yAxis = d3.svg.axis().scale(y).orient('left');

  const domainColors = [
    '#B20238',
    '#00DA5C',
    '#8931EF',
    '#FF00BD',
    '#0057E9',
    '#077B8A',
    '#F3CA20',
    '#FF5733',
    '#09D3F9',
  ].slice(0, Object.keys(stats[0].data).length);

  const color = d3
    .scaleOrdinal()
    .domain(clients.map((c) => c.toString()))
    .range(domainColors);

  const title = 'Scenario timings';
  // add a title
  svg
    .append('text')
    .attr('x', width / 2)
    .attr('y', 0 + margin.top / 2)
    .attr('text-anchor', 'middle')
    .style('font-size', '18px')
    .text(title);

  // draw y axis
  svg
    .append('g')
    .attr('class', 'y axis')
    .call(d3.axisLeft(y))
    .append('text') // and text1
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .style('font-size', '12px')
    .text('Time to propagate (ms)');

  // draw x axis
  svg
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (height + margin.top + 10) + ')')
    .call(d3.axisBottom(x))
    .append('text') // text label for the x axis
    .attr('x', width / 2)
    .attr('y', 15)
    .attr('dy', '1.2em')
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .text('Scenario number');

  // Set up the legend
  const legendSize = 10;
  // svg
  //   .selectAll('mydots')
  //   .data(clients)
  //   .enter()
  //   .append('rect')
  //   .attr('x', 50)
  //   .attr('y', function (d, i) {
  //     return 50 + i * (legendSize + 5);
  //   }) // 100 is where the first dot appears. 25 is the distance between dots
  //   .attr('width', legendSize)
  //   .attr('height', legendSize)
  //   .style('fill', (d) => color(d.toString()));

  // svg
  //   .selectAll('mylabels')
  //   .data(clients)
  //   .enter()
  //   .append('text')
  //   .attr('x', 50 + legendSize * 1.2)
  //   .attr('y', function (d, i) {
  //     return 50 + i * (legendSize + 5) + legendSize / 2;
  //   }) // 100 is where the first dot appears. 25 is the distance between dots
  //   .style('fill', (d) => color(d.toString()))
  //   .text(function (d) {
  //     return d + ' users';
  //   })
  //   .attr('text-anchor', 'left')
  //   .style('alignment-baseline', 'middle');

  // Add dots to graph
  svg
    .append('g')
    .selectAll('dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function (d) {
      return x(d.scenario.toString());
    })
    .attr('cy', function (d) {
      return y(d.time);
    })
    .attr('r', 2)
    .attr('fill', (d) => color(d.numOfClients) as string)
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseleave', mouseleave);

  // Add line chart
  for (const n of clients) {
    const line = d3
      .line()
      // @ts-ignore
      .x((d) => x(d.scenario))
      // @ts-ignore
      .y((d) => y(d.time));
    // .defined(({ time }) => !isNaN(time))
    // .x(({ scenario }) => x(scenario))
    // .y(({ time }) => y(time));

    svg
      .append('path')
      .datum(p95[n])
      .attr('class', 'line')
      // @ts-ignore
      .attr('stroke', (d) => color(d.numOfClients.toString()) as string)
      // @ts-ignore
      .attr('d', line);
  }
}
*/
