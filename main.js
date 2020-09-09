//1.get data from api
//2. remove last 3 quarters
//3. width for the bars
//4 width for svg to fit bars
//5 scale the heights of the bars

//dummy data

const dummy = [
  ["1947-01-01", 243.1],
  ["1947-04-01", 246.3],
  ["1947-07-01", 250.1],
  ["1947-10-01", 260.3],
  ["1948-01-01", 266.2],
  ["1948-04-01", 272.9],
  ["1948-07-01", 279.5],
  ["1948-10-01", 280.7],
  ["1949-01-01", 275.4],
  ["1949-04-01", 271.7],
];

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
  .then((res) => res.json())
  .then((res) => {
    const { data } = res;

    createBarChart(data.map(d => [d[0].split('-')[0], d[1]])) //we're spliting it by the hyphens ,making a new array and getting the first item which is our year ( which initially is in format '2010-01-01')
  });

function createBarChart(data) {
  const width = 800;
  const height = 500;
  const padding = 30;

  const barWidth = width / data.length ;

  const yScale = d3.scaleLinear()
                .domain([0, d3.max(data, d => d[1])])
                .range([0, height])

    
   const xScale = d3.scaleLinear()
            .domain([d3.min(data, d => d[0]), d3.max(data, d=> d[0])])
            .range([0, width - 2 * padding])             

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * barWidth  )
    .attr("y", (d) => height - yScale(d[1]))
    .attr("width", barWidth)
    .attr("height", (d) => yScale(d[1]) + "px");


    //create an axis

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisBottom(yScale)


    svg.append('g')
        .attr('transform', `translate(${padding},${height-padding})`)
        .call(xAxis)



}


