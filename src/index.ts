import * as d3 from "d3";

var grid = d3.select("#grid")
    .append("svg")
    .attr("width", "510px")
    .attr("height", "510px");

let createGrid = function () {
    var xPos = 0; 
    let yPos = 0;
    let width = 50;
    let height = 50;
    let clicks = 0;
    for (let row = 0; row < 10; row++) {
        for (let row = 0; row < 10; row++) {
            d3.select("svg").append("rect")
                .attr("class", "square")
                .attr("x", xPos)
                .attr("y", yPos)
                .attr("width", width)
                .attr("height", height)
                .style("fill", "#fff")
                .style("stroke", "#222")
                .attr("clicks", clicks)
                .on('click', function () {
                    console.log(this)
                    clicks++;
                    if ((clicks) % 4 == 0) { d3.select(this).style("fill", "#fff"); }
                    if ((clicks) % 4 == 1) { d3.select(this).style("fill", "blue"); }
                    if ((clicks) % 4 == 2) { d3.select(this).style("fill", "red"); }
                    if ((clicks) % 4 == 3) { d3.select(this).style("fill", "green"); }
                });
            clicks = 0
            xPos += 50
        }
        xPos = 0    
        yPos += 50
    }
}

createGrid();

console.log(createGrid)
