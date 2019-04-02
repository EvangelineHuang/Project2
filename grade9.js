var grade=d3.json("penguins/classData.json");
var w=500;
var h=500;
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
             .x(function(d){return xScale(d.day);})
             .y(function(d){return yScale(d.grade);});
  svg.append("path")
     .datum(data[8].homework)
     .classed("line",true)
     .attr("d",line);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed("xAxis",true)
     .call(xAxis)
     .attr("transform","translate("+margin.left+","+(margin.top+h)+")");
  svg.append("g")
     .classed("yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+(margin.left+margin.right)+",0)");
     svg.selectAll("circle")
        .data(data[8].homework)
        .enter()
        .append("circle")
        .attr("cx",function(d){return xScale(d.day);})
        .attr("cy",function(d){return yScale(d.grade);})
        .attr("r","5")
        .attr("fill","black")
        .on("mouseover",function(d){
          d3.select("#tooltip1")
            .style("left",w+margin.left+margin.right+300)
            .style("top",20)
            .select("#grade1")
            .text(d.grade);
           d3.select("#day1")
             .text(d.day)
         d3.select("#tooltip1").classed("hidden",false);
        })
        .on("mouseout",function(){
         d3.select("#tooltip1").classed("hidden",true);
        });
},function(err){console.log(err);})
/////////////////////////////////////////////////
grade.then(function(data){
  var xScale=d3.scaleLinear()
               .domain([0,40])
               .range([margin.left+margin.right-10,h+margin.left]);
  var yScale=d3.scaleLinear()
               .domain([0,10])
               .range([h+margin.top,margin.top]);
  var svg=d3.select("#line2")
            .attr("width",w+margin.left+margin.right)
            .attr("height",h+margin.top+margin.bottom);
  var line=d3.line()
             .x(function(d){return xScale(d.day);})
             .y(function(d){return yScale(d.grade);});
  svg.append("path")
     .datum(data[8].quizes)
     .classed("line",true)
     .attr("d",line);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed("xAxis",true)
     .call(xAxis)
     .attr("transform","translate("+(margin.left-10)+","+(margin.top+h)+")");
  svg.append("g")
     .classed("yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+(margin.left+margin.right)+",0)");
     svg.selectAll("circle")
        .data(data[8].quizes)
        .enter()
        .append("circle")
        .attr("cx",function(d){return xScale(d.day);})
        .attr("cy",function(d){return yScale(d.grade);})
        .attr("r","5")
        .attr("fill","black")
        .on("mouseover",function(d){
          d3.select("#tooltip1")
            .style("left",w+margin.left+margin.right+300)
            .style("top",20)
            .select("#grade1")
            .text(d.grade);
           d3.select("#day1")
             .text(d.day)
         d3.select("#tooltip1").classed("hidden",false);
        })
        .on("mouseout",function(){
         d3.select("#tooltip1").classed("hidden",true);
        });
},function(err){console.log(err);})
/////////////////////////////////////////
test=d3.json("3Grades.json")
test.then(function(data){
  var xScale=d3.scaleLinear()
               .domain([0,2])
               .range([margin.left+margin.right-10,h+margin.left]);
  var yScale=d3.scaleLinear()
               .domain([0,100])
               .range([h+margin.top,margin.top]);
  var svg=d3.select("#line3")
            .attr("width",w+margin.left+margin.right)
            .attr("height",h+margin.top+margin.bottom);
  var line=d3.line()
             .x(function(d,i){return xScale(i);})
             .y(function(d){return yScale(d);});

  svg.append("path")
     .datum(data[8].test)
     .classed("line",true)
     .attr("d",line);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed("xAxis",true)
     .call(xAxis)
     .attr("transform","translate("+(margin.left-20)+","+(margin.top+h)+")");
  svg.append("g")
     .classed("yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+(margin.left+10)+",0)");
     svg.selectAll("circle")
        .data(data[8].test)
        .enter()
        .append("circle")
        .attr("cx",function(d,i){return xScale(i);})
        .attr("cy",function(d){return yScale(d);})
        .attr("r","5")
        .on("mouseover",function(d,i){
          d3.select("#tooltip3")
            .style("left",w+margin.left+margin.right+300)
            .style("top",20)
            .select("#Test")
            .text(d);
           d3.select("#name")
             .text(function(){
               if(i==2)
               {return "Final";}
               else
               {return "Test"+(i+1)}
             })
         d3.select("#tooltip3").classed("hidden",false);
        })
        .on("mouseout",function(){
         d3.select("#tooltip3").classed("hidden",true);
        });

},function(err){console.log(err);})
