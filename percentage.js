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
 var svg=d3.select("#totalGrade")
           .attr("width",width+margin.right+margin.left)
           .attr("height",height+margin.top+margin.bottom)
var xScale=d3.scaleLinear()
             .domain([0,23])
             .range([margin.right,width])
var yScale=d3.scaleLinear()
             .domain([0,250])
             .range([height+margin.top,margin.top])
var line=d3.line()
           .x(function(d,i){return xScale(i)})
           .y(function(d){return yScale(d)})
svg.append("path")
   .attr("id","lineTotal")
   .datum(t)
   .attr("d",line)
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
svg.selectAll("circle")
   .data(t)
   .enter()
   .append("circle")
   .attr("cx",function(d,i){return xScale(i)})
   .attr("cy",function(d){return yScale(d)})
   .attr("r",5)
},function(err){console.log(err)})
