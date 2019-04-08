var w = 300;
var h = 300;
var r = h/2;

var color = d3.scaleOrdinal(["#DD6E42","#E8DAB2","#6E9075","#C0D6DF","#EAEAEA","#5D737E"]);

var data = [{"label":"Quizzes", "value":15},
            {"label":"Homework", "value":15},
            {"label":"Test-1", "value":20},
            {"label":"Test-2", "value":20},
            {"label":"Final", "value":30}];

    var plot = d3.select("body")
                .append("svg")
                .attr("id","pie")
                .attr("width", w)
                .attr("height", h)
                .append("g")
                .attr("transform", "translate(" + r + "," + r + ")")

    var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(r);

    var pie = d3.pie()
                .sort(null)
                .value(function(d) { return d.value; })(data);

    var arcs = plot.selectAll("g")
                   .data(pie)
                   .enter()
                   .append("g")
                   .attr("class", "arc");

        arcs.append("path")
            .attr("d", arc)
            .attr("fill",function(d,i){return color(i)})
        arcs.append("text")
            .attr("transform", function(d){
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .text(function(d, i) { return data[i].label; })
            .attr("x", 0)
            .attr("y", 0);

        arcs.append("text")
            .attr("transform", function(d){
                    return "translate(" + arc.centroid(d) + ")";
                })
            .attr("text-anchor", "middle")
            .text(function(d, i) { return data[i].value; })
            .attr("x", -5)
            .attr("y", "1.4em");

        arcs.append("text")
            .attr("transform", function(d){
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .text("%")
            .attr("x", 13)
            .attr("y", "1.4em");
////////////////////////////////////////////////////////////
var total=d3.csv("AllGrades.csv")
var width=500;
var height=500;
var margin={
  left:20,
  top:20,
  bottom:20,
  right:40
}
total.then(function(data){
  var t=data.map(function(d,i){
    return d.total;
  })
  var n=data.map(function(d,i){
    return d.name;
  })
var svg=d3.select("#totalGrade")
           .attr("width",width+margin.right+margin.left)
           .attr("height",height+margin.top+margin.bottom)
var xScale=d3.scaleLinear()
             .domain([0,23])
             .range([margin.right,width])
var yScale=d3.scaleLinear()
             .domain([0,260])
             .range([height+margin.top,margin.top])
var line=d3.line()
           .x(function(d,i){return xScale(i)})
           .y(function(d){return yScale(d)})

var color=["#ccebb4","#bfe6b5","#b4e2b6","#a8ddb7","#9cd8b8","#91d4b9","#86d0bb","#71c8bd","#66c3bf","#59bec0","#4eb9c1","#45b3c2","#3fafc2","#34a7c2","#2c9dc0","#2897bf","#238cbc","#217fb7","#2076b3","#216aae","#225ea8","#2353a3","#23499d"]

svg.selectAll("rect")
   .attr("id","barTotal")
   .data(t)
   .enter()
   .append("rect")
   .attr("x", function(d,i){
     return xScale(i+3);})
   .attr("y", function(d){
     return yScale(d);})
   .attr("width", width/23-3)
   .attr("height", function(d){
     return height-yScale(d);})
   .attr("fill",function(d,i){
     return color[i];
   })
   .attr("transform","translate(-60,20)")
   .on("mouseover",function(d,i){
    var xPosition = parseFloat(d3.select(this).attr("x")) + width/23 / 2;
    var yPosition = parseFloat(d3.select(this).attr("y")) / 2 + height / 2;
     d3.select("#tooltip")
       .style("left", xPosition + "px")
       .style("top", yPosition + "px")
       .select("#grade")
       .text(d)
      d3.select("#name")
         .text(n[i])
     d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
     d3.select("#tooltip").classed("hidden",true);
    });

var xAxis=d3.axisBottom(xScale);
var yAxis=d3.axisLeft(yScale);

svg.append("g")
   .attr("class","xAxis")
   .call(xAxis)
   .attr("transform","translate(0,"+(margin.top+height)+")")
svg.append("g")
   .attr("class","yAxis")
   .call(yAxis)
   .attr("transform","translate("+(margin.right)+",0)")
svg.append("text")
   .text("student")
   .attr("transform","translate("+(width+5)+","+(margin.top+height+5)+")")
},function(err){console.log(err)})
