var grade=d3.json("3Grades.json");
var bgrade=d3.json("penguins/classData.json");
var change=d3.csv("GradesChange.csv")
var width=500;
var height=500;
var padding=2;
var margin={
  left:40,
  right:20,
  top:20,
  bottom:20
}
var rank1=[{name:"wizard",grade:"100"},{name:"tux",	grade:"91"},{name:"crafty",grade:"90"},
           {name:"moana",grade:"89"},{name:"pilot",grade:"85"},{name:"Farmer",grade:"76"},{name:"sailor",grade:"74"},
           {name:"Pinga",grade:"72"},{name:"tauch",grade:"71"},{name:"valentine-ocal",grade:"70"},{name:"bookworm",grade:"68"},
           {name:"santa",grade:"68"},{name:"gentleman",grade:"67"},{name:"Easter",grade:"65"},{name:"pharaoh",grade:"63"},
           {name:"drunken",grade:"59"},{name:"valentine",grade:"54"},{name:"cyclist",grade:"49"},{name:"ebook",grade:"48"},
           {name:"pixie",grade:"47"},{name:"judo",grade:"45"},{name:"grill",grade:"44"},{name:"painter",grade:"43"}];
//ranking of test2
var rank2=[{name:"moana",grade:"100"},{name:"tauch",grade:"90"},{name:"tux",grade:"88"},{name:"pilot",grade:"86"},
          {name:"wizard",grade:"86"},{name:"Easter",grade:"83"},{name:"sailor",grade:"80"},{name:"gentleman",grade:"71"},
          {name:"crafty",	grade:"70"},{name:"valentine-ocal",grade:"70"},{name:	"drunken",grade:"68"},{name:"santa",grade:"66"},
          {name:"bookworm",	grade:"65"},{name:"valentine",grade:"62"},{name:"painter",grade:"61"},{name:"pixie",grade:"57"},
          {name:"cyclist",	grade:"56"},{name:"Farmer",grade:"54"},{name:"Pinga",grade:"52"},{name:"ebook",grade:"33"},
          {name:"pharaoh",grade:"28"},{name:"judo",grade:"19"},{name:"grill",grade:"14"}]
//ranking of final
var frank=[{name:"tux",grade:"97"},{name:"sailor",grade:"91"},{name:"crafty",grade:"77"},{name:"gentleman",grade:"75"},{name:"painter",grade:"75"},
          {name:"drunken",grade:"74"},{name:"Easter",grade:"71"},{name:"pilot",grade:"71"},{name:"wizard",grade:"68"},{name:"moana",grade:"67"},
          {name:"pixie",grade:"62"},{name:"Farmer",grade:"60"},{name:"Pinga",grade:"59"},{name:"valentine-ocal",grade:"58"},{name:"santa",grade:"57"},
          {name:"bookworm",grade:"55"},{name:"tauch",grade:"54"},{name:"cyclist",grade:"46"},{name:"valentine",grade:"46"},{name:"ebook",grade:"44"},
          {name:"judo",grade:"29"},{name:"pharaoh",grade:"19"},{name:"grill",grade:"14"}]

function homework(data,ind){
  console.log(data)
  var xScale=d3.scaleLinear()
               .domain([0,40])
               .range([margin.left,height+margin.left]);
  var yScale=d3.scaleLinear()
               .domain([0,50])
               .range([height+margin.top,margin.top]);
  var svg=d3.select("#line")
            .attr("width",width+margin.left+margin.right)
            .attr("height",height+margin.top+margin.bottom);
  var line=d3.line()
             .x(function(d){return xScale(d.day);})
             .y(function(d){return yScale(d.grade);});

  svg.append("path")
     .datum(data[ind].homework)
     .classed("line",true)
     .attr("d",line);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed("xAxis",true)
     .call(xAxis)
     .attr("transform","translate("+margin.left/2+","+(margin.top+height)+")");
  svg.append("g")
     .classed("yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+(margin.left+margin.right)+",0)");
  svg.selectAll("circle")
     .data(data[ind].homework)
     .enter()
     .append("circle")
     .attr("cx",function(d){return xScale(d.day);})
     .attr("cy",function(d){return yScale(d.grade);})
     .attr("r","5")
     .attr("fill","black")
     .on("mouseover",function(d){
       d3.select("#tooltip1")
         .style("left",width+margin.left+margin.right+300)
         .style("top",20)
         .select("#grade1")
         .text("Grade: "+d.grade);
        d3.select("#day1")
          .text("Day: "+d.day)
      d3.select("#tooltip1").classed("hidden",false);
     })
     .on("mouseout",function(){
      d3.select("#tooltip1").classed("hidden",true);
     });
}
function quize(data,ind){
  var xScale=d3.scaleLinear()
               .domain([0,40])
               .range([margin.left+margin.right-10,width+margin.left]);
  var yScale=d3.scaleLinear()
               .domain([0,10])
               .range([height+margin.top,margin.top]);
  var svg=d3.select("#line2")
            .attr("width",width+margin.left+margin.right)
            .attr("height",height+margin.top+margin.bottom);
  var line=d3.line()
             .x(function(d){return xScale(d.day);})
             .y(function(d){return yScale(d.grade);});
  svg.append("path")
     .datum(data[ind].quizes)
     .classed("line",true)
     .attr("d",line);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed("xAxis",true)
     .call(xAxis)
     .attr("transform","translate(10,"+(margin.top+height)+")");
  svg.append("g")
     .classed("yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+(margin.left+margin.right)+",0)");
     svg.selectAll("circle")
        .data(data[ind].quizes)
        .enter()
        .append("circle")
        .attr("cx",function(d){return xScale(d.day);})
        .attr("cy",function(d){return yScale(d.grade);})
        .attr("r","5")
        .attr("fill","black")
        .on("mouseover",function(d){
          d3.select("#tooltip1")
            .style("left",width+margin.left+margin.right+300)
            .style("top",20)
            .select("#grade1")
            .text("Garde: "+d.grade);
           d3.select("#day1")
             .text("Day: "+d.day)
         d3.select("#tooltip1").classed("hidden",false);
        })
        .on("mouseout",function(){
         d3.select("#tooltip1").classed("hidden",true);
        });
}
////////////////////////////////////////////////////
function test(data, ind){
  var xScale=d3.scaleLinear()
               .domain([0,2])
               .range([margin.left+margin.right-10,width+margin.left]);
  var yScale=d3.scaleLinear()
               .domain([0,100])
               .range([height+margin.top,margin.top]);
  var svg=d3.select("#line3")
            .attr("width",width+margin.left+margin.right)
            .attr("height",height+margin.top+margin.bottom);
  var line=d3.line()
             .x(function(d,i){return xScale(i);})
             .y(function(d){return yScale(d);});

  svg.append("path")
     .datum(data[ind].test)
     .classed("line",true)
     .attr("d",line);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed("xAxis",true)
     .call(xAxis)
     .attr("transform","translate(0,"+(margin.top+height)+")");
  svg.append("g")
     .classed("yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+(margin.right+30)+",0)");
     svg.selectAll("circle")
        .data(data[ind].test)
        .enter()
        .append("circle")
        .attr("cx",function(d,i){return xScale(i);})
        .attr("cy",function(d){return yScale(d);})
        .attr("r","5")
        .on("mouseover",function(d,i){
          d3.select("#tooltip3")
            .style("left",width+margin.left+margin.right+300)
            .style("top",20)
            .select("#Test")
            .text("Test:"+d);
           d3.select("#name")
             .text(function(){
               if(i==2)
               {return "Name: Final";}
               else
               {return "Name: Test"+(i+1)}
             })
         d3.select("#tooltip3").classed("hidden",false);
        })
        .on("mouseout",function(){
         d3.select("#tooltip3").classed("hidden",true);
        });
}
/////////////////////////////////////////////////////
var graph=function(data,datum,rank,dt){

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
     .on("mouseover",function(d,i){
       var name=d3.select(this).attr("class");
       d3.select("p."+name)
         .style("background-color","orange")
     })
     .on("mouseout",function(){

       d3.selectAll("p")
         .style("background-color","transparent")
     })
     .on("click",function(d,i){
       d3.select("#body").remove();
       var body=d3.select("body")
         .append("div")
         .attr("id","body")
      body.append("svg")
          .attr("id","line");
      body.append("svg")
          .attr("id","line2");
      body.append("svg")
          .attr("id","line3");
      var t1=body.append("div")
          .attr("id","tooltip1")
          .classed("hidden",true);
          t1.append("span")
            .attr("id","grade1");
          t1.append("br")
            t1.append("span")
              .attr("id","day1")
      var t2=body.append("div")
          .attr("id","tooltip2")
          .classed("hidden",true);
          t2.append("span")
            .attr("id","grade2");
          t2.append("br")
            t2.append("span")
              .attr("id","day2")
      var t3=body.append("div")
          .attr("id","tooltip3")
          .classed("hidden",true);
          t3.append("span")
            .attr("id","Test");
          t3.append("br")
            t3.append("span")
              .attr("id","Name")
       homework(dt,i);
       quize(dt,i);
      test(datum,i);
      body.append("button")
          .on("click",function(){
            d3.select("#body").remove();
            var body=d3.select("body")
              .append("div")
              .attr("id","body");
            body.append("svg")
                .attr("id","test1")
            body.append("div")
                .attr("id","rank")
                .classed("whole",true)
                .append("h1")
                .text("Ranking:")
                .append("span")
                .classed("wholehtml",true)
            bgrade.then(function(data){

              var test1=data.map(function(d){
                return d.test[0].grade;
              });
              grade.then(function(d){
                graph(test1,d,rank1,data);},function(err){console.log(err);});
            },function(err){console.log(err);});

            d3.select("#body")
              .append("button")
              .classed("test1",true)
              .on("click",function(){
                bgrade.then(function(data){
                  var test1=data.map(function(d){
                    return d.test[0].grade;
                  });
                  grade.then(function(d){
                    changegraph(test1,d,rank1,data);
                    },function(err){console.log(err);});
                    d3.select("#ranking")
                      .text("Test 1")
                },function(err){console.log(err);});
              })
              .text("Test 1");

            d3.select("#body")
              .append("button")
              .classed("test2",true)
              .on("click",function(){
                bgrade.then(function(data){
                  var test2=data.map(function(d){
                    return d.test[1].grade;
                  });
                  grade.then(function(d){
                    changegraph(test2,d,rank2,data);
                    },function(err){console.log(err);});
                    d3.select("#ranking")
                      .text("Test 2")
                },function(err){console.log(err);});
              })
              .text("Test 2");

              d3.select("#body")
                .append("button")
                .classed("final",true)
                .on("click",function(){
                  grade.then(function(data){
                    var final=data.map(function(d){
                      console.log(d)
                      return d.test[2];
                    });
                    grade.then(function(d){
                      changegraph(final,d,frank,data);
                      },function(err){console.log(err);});
                      d3.select("#ranking")
                        .text("Final")

                  },function(err){console.log(err);});
                })
                .text("Final");

          })
          .text("Go Back")

     })

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
      })


      d3.select("#ranking")
        .text("Test 1")


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
       return datum[i].name;});
        d3.selectAll("p")
          .data(rank)
          .attr("class",function(d){
            return d.name;
          })
          .text(function(d,i){
            return i+1+". Name: "+d.name+", Grade: "+d.grade;
          })
}
//ranking of test1

bgrade.then(function(data){

  var test1=data.map(function(d){
    return d.test[0].grade;
  });
  grade.then(function(d){
    graph(test1,d,rank1,data);},function(err){console.log(err);});
},function(err){console.log(err);});

d3.select("#body")
  .append("button")
  .classed("test1",true)
  .on("click",function(){
    bgrade.then(function(data){
      var test1=data.map(function(d){
        return d.test[0].grade;
      });
      grade.then(function(d){
        changegraph(test1,d,rank1,data);
        },function(err){console.log(err);});
        d3.select("#ranking")
          .text("Test 1")
    },function(err){console.log(err);});
  })
  .text("Test 1");

d3.select("#body")
  .append("button")
  .classed("test2",true)
  .on("click",function(){
    bgrade.then(function(data){
      var test2=data.map(function(d){
        return d.test[1].grade;
      });
      grade.then(function(d){
        changegraph(test2,d,rank2,data);
        },function(err){console.log(err);});
        d3.select("#ranking")
          .text("Test 2")
    },function(err){console.log(err);});
  })
  .text("Test 2");

  d3.select("#body")
    .append("button")
    .classed("final",true)
    .on("click",function(){
      grade.then(function(data){
        var final=data.map(function(d){
          return d.test[2];
        });

        grade.then(function(d){
          changegraph(final,d,frank,data);
          },function(err){console.log(err);});
          d3.select("#ranking")
            .text("Final")

      },function(err){console.log(err);});
    })
    .text("Final");
