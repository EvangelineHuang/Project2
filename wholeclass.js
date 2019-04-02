var grade=d3.json("3Grades.json");
var padding=2;
var margin={
  left:40,
  right:20,
  top:20,
  bottom:20
}
var graph=function(data,datum,rank){
  var width=500;
  var height=500;
  var color=["#ccebb4","#bfe6b5","#b4e2b6","#a8ddb7","#9cd8b8","#91d4b9","#86d0bb","#71c8bd","#66c3bf","#59bec0","#4eb9c1","#45b3c2","#3fafc2","#34a7c2","#2c9dc0","#2897bf","#238cbc","#217fb7","#2076b3","#216aae","#225ea8","#2353a3","#23499d"]
  var xScale=d3.scaleLinear()
               .domain([1,24])
               .range([margin.left,width+margin.left]);
  var yScale=d3.scaleLinear()
               .domain([0,100])
               .range([height,margin.top]);
  var svg=d3.select("#test1")
    .attr("width",width+margin.left+margin.right)
    .attr("height",height+margin.top+margin.bottom);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x",function(d,i){return xScale(i+1);})
     .attr("y",function(d){return yScale(d);})
     .attr("width",width/23-padding)
     .attr("height",function(d){return height-yScale(d)})
     .attr("fill",function(d,i){
          return color[i];
     })
     .attr("class",function(d,i){
       return datum[i].name;})
     .on("mouseover",function(){

       var name=d3.select(this).attr("class");
       d3.select("p."+name)
         .style("background-color","orange")
     })
     .on("mouseout",function(){

       d3.selectAll("p")
         .style("background-color","transparent")
     });

     svg.append("g")
        .classed("testxAxis",true)
        .call(xAxis)
        .attr("transform","translate(0,"+height+")");
     svg.append("g")
        .classed("testyAxis",true)
        .call(yAxis)
        .attr("transform","translate("+margin.left+",0)");
    d3.select("#rank")
      .selectAll("p")
      .data(rank)
      .enter()
      .append("p")
      .attr("class",function(d){
        return d.name;
      })
      .text(function(d,i){
        return i+1+". Name: "+d.name+", Grade: "+d.grade+";";
      })
      .on("mouseover",function(){

        var name=d3.select(this).attr("class");
        d3.select(this).style("background-color","orange")
        d3.select("rect."+name)
          .attr("stroke","black")
      })
      .on("mouseout",function(){
        d3.selectAll("p").style("background-color","transparent")
        d3.selectAll("rect")
          .attr("stroke","none")
      });
      d3.select("#ranking")
        .text("Test 1")
      //info box
    /*  d3.select("#info")
        .selectAll("g")
        .data() */
}
///////////////////////////////////////////
var changegraph=function(data,datum,rank){
  var width=500;
  var height=500;
  var xScale=d3.scaleLinear()
               .domain([1,24])
               .range([margin.left,width+margin.left]);
  var yScale=d3.scaleLinear()
               .domain([0,100])
               .range([height,margin.top]);
  var svg=d3.select("#test1")
    .attr("width",width+margin.left+margin.right)
    .attr("height",height+margin.top+margin.bottom);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);

  svg.selectAll("rect")
     .data(data)
     .transition()
     .attr("x",function(d,i){return xScale(i+1);})
     .attr("y",function(d){return yScale(d);})
     .attr("width",width/23-padding)
     .attr("height",function(d){return height-yScale(d)})
     .attr("class",function(d,i){
       return datum[i].name;})
        d3.selectAll("p")
          .data(rank)
          .attr("class",function(d){
            return d.name;
          })
          .text(function(d,i){
            return i+1+". Name: "+d.name+", Grade: "+d.grade;
          })
}
///////////////////////////////
var rank1=[{name:"wizard",grade:"100"},{name:"tux",	grade:"91"},{name:"crafty",grade:"90"},
           {name:"moana",grade:"89"},{name:"pilot",grade:"85"},{name:"Farmer",grade:"76"},{name:"sailor",grade:"74"},
           {name:"Pinga",grade:"72"},{name:"tauch",grade:"71"},{name:"valentine-ocal",grade:"70"},{name:"bookworm",grade:"68"},
           {name:"santa",grade:"68"},{name:"gentleman",grade:"67"},{name:"Easter",grade:"65"},{name:"pharaoh",grade:"63"},
           {name:"drunken",grade:"59"},{name:"valentine",grade:"54"},{name:"cyclist",grade:"49"},{name:"ebook",grade:"48"},
           {name:"pixie",grade:"47"},{name:"judo",grade:"45"},{name:"grill",grade:"44"},{name:"painter",grade:"43"}];
var rank2=[{name:"moana",grade:"100"},{name:"tauch",grade:"90"},{name:"tux",grade:"88"},{name:"pilot",grade:"86"},
          {name:"wizard",grade:"86"},{name:"Easter",grade:"83"},{name:"sailor",grade:"80"},{name:"gentleman",grade:"71"},
          {name:"crafty",	grade:"70"},{name:"valentine-ocal",grade:"70"},{name:	"drunken",grade:"68"},{name:"santa",grade:"66"},
          {name:"bookworm",	grade:"65"},{name:"valentine",grade:"62"},{name:"painter",grade:"61"},{name:"pixie",grade:"57"},
          {name:"cyclist",	grade:"56"},{name:"Farmer",grade:"54"},{name:"Pinga",grade:"52"},{name:"ebook",grade:"33"},
          {name:"pharaoh",grade:"28"},{name:"judo",grade:"19"},{name:"grill",grade:"14"}]
var frank=[{name:"tux",grade:"97"},{name:"sailor",grade:"91"},{name:"crafty",grade:"77"},{name:"gentleman",grade:"75"},{name:"painter",grade:"75"},
          {name:"drunken",grade:"74"},{name:"Easter",grade:"71"},{name:"pilot",grade:"71"},{name:"wizard",grade:"68"},{name:"moana",grade:"67"},
          {name:"pixie",grade:"62"},{name:"Farmer",grade:"60"},{name:"Pinga",grade:"59"},{name:"valentine-ocal",grade:"58"},{name:"santa",grade:"57"},
          {name:"bookworm",grade:"55"},{name:"tauch",grade:"54"},{name:"cyclist",grade:"46"},{name:"valentine",grade:"46"},{name:"ebook",grade:"44"},
          {name:"judo",grade:"29"},{name:"pharaoh",grade:"19"},{name:"grill",grade:"14"}]
grade.then(function(data){
  var test1=data.map(function(d){
    return d.test[0];
  });
    graph(test1,data,rank1);

},function(err){console.log(err);});

d3.select("body")
  .append("button")
  .classed("test1",true)
  .on("click",function(){
    grade.then(function(data){
      var test1=data.map(function(d){
        return d.test[0];
      });
        changegraph(test1,data,rank1);
        d3.select("#ranking")
          .text("Test 1")
    },function(err){console.log(err);});
  })
  .text("Test 1");

d3.select("body")
  .append("button")
  .classed("test2",true)
  .on("click",function(){
    grade.then(function(data){
      var test2=data.map(function(d){
        return d.test[1];
      });
        changegraph(test2,data,rank2);
        d3.select("#ranking")
          .text("Test 2")
    },function(err){console.log(err);});
  })
  .text("Test 2");

  d3.select("body")
    .append("button")
    .classed("final",true)
    .on("click",function(){
      grade.then(function(data){
        var final=data.map(function(d){
          return d.test[2];
        });
          changegraph(final,data,frank);
          d3.select("#ranking")
            .text("Final")
      },function(err){console.log(err);});
    })
    .text("Final");
