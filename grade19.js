var grade=d3.json("penguins/classData.json");
var w=600;
var h=400;
var margin={
  left:20,
  right:20,
  top:20,
  bottom:20
}
grade.then(function(data){
  var xScale=d3.scaleLinear()
               .domain([0,40])
               .range([margin.left,h+margin.left]);
  var yScale=d3.scaleLinear()
               .domain([0,50])
               .range([h+margin.top,margin.top]);
  var svg=d3.select("#line")
            .attr("width",w+margin.left+margin.right)
            .attr("height",h+margin.top+margin.bottom);
  var line=d3.line()
             .x(function(d){return xScale(d.day,10);})
             .y(function(d){return yScale(d.grade,10);});
  svg.append("path")
     .datum(data[18].homework)
     .classed("line",true)
     .attr("d",line);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed(".xAxis",true)
     .call(xAxis)
     .attr("transform","translate("+margin.left+","+(margin.top+h)+")");
  svg.append("g")
     .classed(".yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+(margin.left+margin.right)+",0)");
},function(err){console.log(err);})
