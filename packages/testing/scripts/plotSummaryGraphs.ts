export const PLOT_SUMMARY_GRAPHS = String.raw`
function plotSummaryGraphs(stats) {
  var labels = true; // show the text labels beside individual boxplots?

  var margin = {top: 30, right: 50, bottom: 70, left: 50};
  var width = 800 - margin.left - margin.right;
  var height = 800 - margin.top - margin.bottom;
    
  const flattenedData = stats.map(scenario => scenario.data).reduce((prev, cur) => {
    const next = {
      ...prev,
    };
    for (const [numOfClients, d] of Object.entries(cur)) {
      if (next[numOfClients] === undefined) next[numOfClients] = [];
      next[numOfClients] = [
        ...next[numOfClients],
        ...d
      ];
    }
    return next;
  }, {});
  const completeDataSet = Object.values(flattenedData).flatMap(data => data);
  var min = d3.min(completeDataSet),
      max = d3.max(completeDataSet);

  const data = [];
  let i = 0;
  for (const [numOfClients, d] of Object.entries(flattenedData)) {
    if (data[i] === undefined) data[i] = [];
    if (data[i][0] !== numOfClients.toString()) data[i][0] = numOfClients.toString();
    data[i][1] = d;
    i++;
  }

  var chart = d3.box()
      .whiskers(iqr(1.5))
      .height(height)	
      .domain([min, max])
      .showLabels(labels);

    var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("class", "box")    
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // the x-axis
    var x = d3.scale.ordinal()	   
      .domain( data.map(function(d) { return d[0] } ) )	    
      .rangeRoundBands([0 , width], 0.7, 0.3); 		

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

    // draw the boxplots	
    svg.selectAll(".box")	   
        .data(data)
      .enter().append("g")
      .attr("transform", function(d) { return "translate(" +  x(d[0])  + "," + margin.top + ")"; } )
        .call(chart.width(x.rangeBand())); 
    
          
    const title = "Summary of all Scenarios";
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
          .text("Number of clients connected"); 


  // Returns a function to compute the interquartile range.
  function iqr(k) {
    return function(d, i) {
      var q1 = d.quartiles[0],
          q3 = d.quartiles[2],
          iqr = (q3 - q1) * k,
          i = -1,
          j = d.length;
      while (d[++i] < q1 - iqr);
      while (d[--j] > q3 + iqr);
      return [i, j];
    };
  }
}
`;
