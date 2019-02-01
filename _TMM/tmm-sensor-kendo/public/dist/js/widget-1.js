
    
    function SimpleWidget(spec) {
        var instance = {}; // <-- A
       
        var headline, description; // <-- B
       
        instance.render = function () {
            var div = d3.select('.widget-1').append("div");
       
            div.append("h3").text(headline); // <-- C
       
            div.attr("class", "box")
            .attr("style", "color:" + spec.color) // <-- D
            .append("p")
            .text(description); // <-- E
       
            return instance; // <-- F
        };
        instance.headline = function (h) {
            if (!arguments.length) return headline; // <-- G
            headline = h;
            return instance; // <-- H
        };
       
        instance.description = function (d) {
            if (!arguments.length) return description;
            description = d;
            return instance;
        };
       
        return instance; // <-- I
      
        }
        var widget = SimpleWidget({color: "aliceblue"})
      //var widget = SimpleWidget({color: "#6495ed"})
      .headline("Title Widget")
      .description("Title   One");
      widget.render(); 