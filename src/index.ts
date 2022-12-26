import * as d3 from "d3";

var grid = d3.select("#grid")
    .append("svg")
    .attr("width", "510px")
    .attr("height", "510px");

let createGrid = function () {
    let xPos = 1; 
    let yPos = 1;
    let width = 50;
    let height = 50;
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
                .on('click', function () {
                    console.log('square')
                    // this.clicks++;
                    // if ((d.click) % 4 == 0) { d3.select(this).style("fill", "#fff"); }
                    // if ((d.click) % 4 == 1) { d3.select(this).style("fill", "#2C93E8"); }
                    // if ((d.click) % 4 == 2) { d3.select(this).style("fill", "#F56C4E"); }
                    // if ((d.click) % 4 == 3) { d3.select(this).style("fill", "#838690"); }
                });
            xPos += 50
        }
        xPos = 1
        yPos += 50
    }
}

createGrid();
