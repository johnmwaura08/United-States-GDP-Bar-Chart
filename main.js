//1.get data from api


//dummy data 

const dummy = [
    [
        "1947-01-01",
        243.1
      ],
      [
        "1947-04-01",
        246.3
      ],
      [
        "1947-07-01",
        250.1
      ],
      [
        "1947-10-01",
        260.3
      ],
      [
        "1948-01-01",
        266.2
      ],
      [
        "1948-04-01",
        272.9
      ],
      [
        "1948-07-01",
        279.5
      ],
      [
        "1948-10-01",
        280.7
      ],
      [
        "1949-01-01",
        275.4
      ],
      [
        "1949-04-01",
        271.7
      ]
]

const width = 500;
const height = 500;

const svg = d3.select('body').append('svg')
            .attr('width', width)
            .attr('height', height)


    svg.selectAll('rect')
        .data(dummy)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 22)
        .attr('y', d => height - d[1])
        .attr('width', 20)
        .attr('height', d =>  d[1] + 'px')