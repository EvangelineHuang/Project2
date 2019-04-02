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
