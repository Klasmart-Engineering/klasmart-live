function plotIndividualGraph(stats) {
  const labels = true; // show the text labels beside individual boxplots?

  const margin = { top: 30, right: 50, bottom: 70, left: 50 };
  const width = 1200 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;

  const completeDataSet = Object.values(stats.data).flatMap((data) => data);
  const min = d3.min(completeDataSet) - 20;
  const max = d3.max(completeDataSet) + 20;

  const data = [];
  let i = 0;
  for (const [numOfClients, d] of Object.entries(stats.data)) {
    if (data[i] === undefined) data[i] = [];
    if (data[i][0] !== numOfClients.toString())
      data[i][0] = numOfClients.toString();
    data[i][1] = d;
    i++;
  }

  const chart = d3
    .box()
    .whiskers(iqr(1.5))
    .height(height)
    .domain([min, max])
    .showLabels(labels);

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class", "box")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // the x-axis
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d[0]))
    .rangeRound([0, width]);

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (height + margin.top) + ")")
    .call(d3.axisBottom(x));

  // the y-axis
  const y = d3
    .scaleLinear()
    .domain([min, max])
    .range([height + margin.top, 0 + margin.top]);

  svg.append("g").attr("class", "y axis").call(d3.axisLeft(y));

  // draw the boxplots
  svg
    .selectAll(".box")
    .data(data)
    .enter()
    .append("g")
    .attr(
      "transform",
      (d) => `translate(${x(d[0]) + x.bandwidth() / 3}, ${margin.top})`
    )
    .call(chart.width(x.bandwidth() / 3));

  const title = "Scenario " + stats.scenario + ": " + stats.name;
  // add a title
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", 0 + margin.top / 2)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .text(title);

  // draw y axis
  svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - height / 2)
    .attr("dy", "0.75em")
    .style("text-anchor", "middle")
    .text("Time to propagate (ms)");

  // draw x axis
  svg
    .append("text")
    .attr(
      "transform",
      "translate(" + width / 2 + " ," + (height + margin.top + 20) + ")"
    )
    .style("text-anchor", "middle")
    .attr("dy", "1em")
    .text("Number of clients connected");

  // Returns a function to compute the interquartile range.
  function iqr(k) {
    return function (d, ix) {
      const q1 = d.quartiles[0];
      const q3 = d.quartiles[2];
      const iqr = (q3 - q1) * k;
      let i = -1;
      let j = d.length;
      while (d[++i] < q1 - iqr);
      while (d[--j] > q3 + iqr);
      return [i, j];
    };
  }
}
