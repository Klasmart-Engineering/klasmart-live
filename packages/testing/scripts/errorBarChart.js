function errorBarChart(stats) {
  const margin = { top: 30, right: 50, bottom: 70, left: 50 };
  const width = 1200 - margin.left - margin.right;
  const height = 800 - margin.top - margin.bottom;

  let min = Infinity;
  let max = -Infinity;

  const id = generateHtmlId();

  d3.select('body').append('div').attr('id', id);

  // Index === Scenario number
  const data = [];
  const tempClients = new Set();
  for (const { scenario, name, errors: scenarioErrors } of stats) {
    const dataForScenario = {};
    for (const [numOfClients, e] of Object.entries(scenarioErrors)) {
      const count = e.length;
      dataForScenario[numOfClients] = {
        scenario,
        name,
        numOfClients,
        count,
        errors: e,
      };
      if (count < min) min = count;
      if (count > max) max = count;
      tempClients.add(numOfClients);
    }
    data.push(dataForScenario);
  }
  const clients = [...tempClients].sort((a, b) => a - b);

  const subgroups = [...clients];

  const svg = d3
    .select('#' + id)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Set up the tooltip
  const Tooltip = d3.select('.tooltip');

  const mouseover = function (d) {
    Tooltip.style('opacity', 1);
    d3.select(this).style('stroke', 'black').style('opacity', 1);
  };
  const mousemove = function (event, d) {
    Tooltip.html(
      'Number of clients: ' +
        d.key +
        '<br/>Scenario: ' +
        d.name +
        '<br/>Number of errors: ' +
        d.value
    )
      .style('left', `${event.pageX}px`)
      .style('top', `${event.pageY}px`);
    // .style('left', d3.pointer(event)[0] + 70 + 'px')
    // .style('top', d3.pointer(event)[1] + event.pageY + 'px');
  };
  const mouseleave = function (d) {
    Tooltip.style('opacity', 0);
    d3.select(this).style('stroke', 'none').style('opacity', 0.8);
  };

  // the x-axis
  const segments = width / (stats.length - 1);
  const x = d3.scaleOrdinal(
    stats.map((stats) => stats.scenario.toString()),
    stats.map((n, i) => segments * i + 10)
  );

  const x0 = d3
    .scaleBand()
    .domain(data.map((d, i) => i))
    .rangeRound([0, width])
    .paddingInner(0.1);

  const x1 = d3
    .scaleBand()
    .domain(clients)
    .rangeRound([0, x0.bandwidth()])
    .padding(0.05);

  // the y-axis
  const y = d3
    .scaleLinear()
    .domain([min, max])
    .rangeRound([height + margin.top, 0 + margin.top]);

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

  const title = 'Scenario errors';
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
    .text('Number of errors');

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

  svg
    .append('g')
    .selectAll('g')
    .data(data)
    .join('g')
    .attr('transform', (d, i) => `translate(${x0(i)},0)`)
    .selectAll('rect')
    .data((d) =>
      subgroups.map((key) => ({
        key,
        value: d[key].count,
        numClients: key,
        scenario: d[key].scenario,
        name: d[key].name,
      }))
    )
    .join('rect')
    .attr('x', (d) => x1(d.key))
    .attr('y', (d) => y(d.value))
    .attr('width', x1.bandwidth())
    .attr('height', (d) => y(0) - y(d.value))
    .attr('fill', (d) => color(d.key))
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseleave', mouseleave);

  // svg
  //   .append('g')
  //   .selectAll('g')
  //   .data(data)
  //   .enter()
  //   .append('g')
  //   .attr('transform', function (d) {
  //     return 'translate(' + x(d.numOfClients) + ',0)';
  //   })
  //   .selectAll('rect')
  //   .data(function (d) {
  //     return subgroups.map(function (key) {
  //       return { key, value: d[key].count };
  //     });
  //   })
  //   .enter()
  //   .append('rect')
  //   .attr('x', (d) => xSubgroup(d.key))
  //   .attr('y', (d) => y(d.value))
  //   .attr('width', xSubgroup.bandwidth())
  //   .attr('height', (d) => height - y(d.value))
  //   .attr('fill', (d) => color(d.key));
}
