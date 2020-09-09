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

    createBarChart(data)
  });

function createBarChart(data) {
  const width = 500;
  const height = 500;

  const barWidth = width / data.length ;

  const scale = d3.scaleLinear()
                .domain([0, d3.max(data, d => d[1])])
                .range([0, height])

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
    .attr("y", (d) => height - scale(d[1]))
    .attr("width", barWidth)
    .attr("height", (d) => scale(d[1]) + "px");
}
