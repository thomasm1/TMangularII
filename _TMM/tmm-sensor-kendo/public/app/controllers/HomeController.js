(function () {

    angular.module('app')
        .controller('HomeController', ['dataService', 'notifier', '$state', '$log', HomeController]);

    function HomeController(dataService, notifier, $state, $log) {

        message = 'Sensor Controller';
vm = this;
        vm.refresh = function() {

            $log.debug($state.current);
            $state.reload();

        };

        dataService.getAllSchools()
            .then(function(schools) {
                vm.allSchools = schools;
                vm.schoolCount = schools.length;
            })
            .catch(showError);

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                vm.allClassrooms = classrooms;
                vm.classroomCount = classrooms.length;
            })
            .catch(showError);

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
                vm.activityCount = activities.length;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

// Vanilla
        document.getElementById('one').addEventListener('click', function () {
  
            console.log("You finally clicked without jQuery");
              d3.selectAll(".d3").style("display","none");
            d3.selectAll(".one").style("display","block");
             
              function render(data){
                d3.selectAll(".one")
                  .append("pre")
                  .text(JSON.stringify(data, null, 2));
              }
              function type(d){
                d.sepal_length = +d.sepal_length;
                d.sepal_width  = +d.sepal_width;
                d.petal_length = +d.petal_length;
                d.petal_width  = +d.petal_width;
                return d;
              }
              d3.csv("data/iris.csv", type, render);
          }); 
          
          document.getElementById('two').addEventListener('click', function () {
  
            console.log("You clicked d3 without jQuery");
              d3.selectAll(".d3").style("display","none");
            d3.selectAll(".two").style("display","block");
             

              vm = this;

            var n = 20, // number of layers
            m = 200, // number of samples per layer
            k = 10; // number of bumps per layer
            var stack = d3.stack().keys(d3.range(n)).offset(d3.stackOffsetWiggle),
            layers0 = stack(d3.transpose(d3.range(n).map(function() { return bumps(m, k); }))),
            layers1 = stack(d3.transpose(d3.range(n).map(function() { return bumps(m, k); }))),
            layers = layers0.concat(layers1);
                
            var svg = d3.select("svg"),
            width = +svg.attr("width"),
            height = +svg.attr("height");
            var x = d3.scaleLinear()
                .domain([0, m - 1])
                .range([0, width]);
            var y = d3.scaleLinear()
                .domain([d3.min(layers, stackMin), d3.max(layers, stackMax)])
                .range([height, 0]);
            var z = d3.interpolateCool;
            
            var area = d3.area()
                    .x(function(d, i) { return x(i); })
                    .y0(function(d) { return y(d[0]); })
                    .y1(function(d) { return y(d[1]); });
            svg.selectAll("path")
              .data(layers0)
              .enter().append("path")
                .attr("d", area)
                .attr("fill", function() { return z(Math.random()); });
            
            function stackMax(layer) {
              return d3.max(layer, function(d) { return d[1]; });
            }
            function stackMin(layer) {
              return d3.min(layer, function(d) { return d[0]; });
            }
            function transition() {
              var t;
              d3.selectAll("path")
                .data((t = layers1, layers1 = layers0, layers0 = t))
                .transition()
                      .duration(2500)
                      .attr("d", area);
            }
            
            
            
            // Inspired by Lee Byron’s test data generator.
            
            function bumps(n, m) {
              var a = [], i;
              for (i = 0; i < n; ++i) a[i] = 0;
              for (i = 0; i < m; ++i) bump(a, n);
              return a;
            }
            
            
            
            function bump(a, n) {
              var x = 1 / (0.1 + Math.random()),
            y = 2 * Math.random() - 0.5,
                  z = 10 / (0.1 + Math.random());
              for (var i = 0; i < n; i++) {
                var w = (i / n - y) * z;
                a[i] += x * Math.exp(-w * w);
            
              }
            
            }
            
            


          }); 
          
          /*
          document.getElementById('four').addEventListener('click', function () {
            console.log("You finally clicked without jQuery");
            d3.selectAll(".d3").style("display", "none");
            d3.selectAll(".four").style("display","block"); 
            var body = d3.selectAll(".four"), duration = 3000;
          
              var div = body.append("div")
                      .classed("box", true)
                      .style("background-color", "steelblue")
                      .style("color", "white")
                      .text("waiting") // <-A
                  .transition().duration(duration) // <-B
                          .delay(1000) // <-C
                          .on("start", function(){ // <-D
                              d3.select(this).text(function (d, i) {
                                  return "transitioning";
                              });
                          })
                          .on("end", function(){ // <-E
                              d3.select(this).text(function (d, i) {
                                  return "done";
                              });
                          })
                      .style("margin-left", "600px");
          });
           */
          document.getElementById('five').addEventListener('click', function () {
            
            console.log("You finally clicked without jQuery");
              d3.selectAll(".d3").style("display","none");
            d3.selectAll(".five").style("display","block");
             
          
            var data = ["Cat", "Dog", "Cat", "Dog", "Cat", "Dog", "Cat", "Dog"],
                  duration = 800;
          
              d3.selectAll(".five").selectAll("div")
                      .data(data)
                  .enter()
                  .append("div")
                      .attr("class", "fixed-cell")
                      .style("top", function (d, i) {
                          return i * 40 + "px";
                      })
                      .style("background-color", "steelblue")
                      .style("color", "white")
                      .style("left", "500px")
                      .text(function (d) {
                          return d;
                      })
                      .transition() // <- A
                          .duration(duration)
                              .style("left", "10px")
                      .filter(function(d){return d == "Cat";}) // <- B
                          .transition() // <- C
                          .duration(duration)
                              .style("left", "500px");
          }); 
          
          document.getElementById('six').addEventListener('click', function () {
            console.log("You finally clicked without jQuery");
            d3.selectAll(".d3").style("display", "none");
            d3.selectAll(".six").style("display","block"); 
          var id= 0,
                  data = [],
                  duration = 200,
                  chartHeight = 100,
                  chartWidth = 680;
          
              for(var i = 0; i < 20; i++) push(data);
          
              function render(data) {
                  var selection = d3.selectAll(".six")
                          .selectAll("div.v-bar")
                          .data(data, function(d){return d.id;}); // <-A
          
                  // enter
                  selection.enter()
                          .append("div")
                          .attr("class", "v-bar")
                          .style("z-index", "0")
                          .style("position", "fixed")
                          .style("top", chartHeight + "px")
                          .style("left", function(d, i){
                              return barLeft(i+1) + "px"; // <-B
                          })
                          .style("height", "0px") // <-C
                          .append("span");
          
                  // update
                  selection
                          .transition().duration(duration) // <-D
                          .style("top", function (d) {
                              return chartHeight - barHeight(d) + "px";
                          })
                          .style("left", function(d, i){
                              return barLeft(i) + "px";
                          })
                          .style("height", function (d) {
                              return barHeight(d)  + "px";
                          })
                          .style("opacity",".6")
                          .style("border","solid yellow 1px")
                          .select("span")
                          .text(function (d) {return d.value;});
          
                  // exit
                  selection.exit()
                          .transition().duration(duration) // <-E
                          .style("left", function(d, i){
                              return barLeft(-1) + "px"; //<-F
                          })
                          .remove(); // <-G
              }
          
              function push(data) {
                  data.push({
                      id: ++id,
                      value: Math.round(Math.random() * chartHeight *3.1)
                  });
              }
          
              function barLeft(i) {
                  return i * (30 + 2);
              }
          
              function barHeight(d) {
                  return d.value;
              }
          
              setInterval(function () {
                  data.shift();
                  push(data);
                  render(data);
              }, 1000);
          
              render(data);
          
              d3.selectAll(".six")
                 .append("div")
                     .attr("class", "baseline")
                     .style("position", "fixed")
                     .style("z-index", "1")
                     .style("top", chartHeight + "px")
                     .style("left", "0px")
                     .style("width", chartWidth + "px");
          }); 
      
/*
    document.getElementById("seven").addEventListener("click", function () { 

        d3.selectAll(".d3").style("display","none");
        d3.selectAll(".seven").style("display","block");
         
 


    });
  */
  

}
}());