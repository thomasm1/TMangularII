'use strict';

// Register `postList` component, along with its associated controller and template
angular.
  module('postList').
  component('postList', {
    templateUrl: 'post-list/post-list.template.html',
    controller: ['Post',
      function postListController(Post) {
        this.posts = Post.query();
        this.orderProp = 'did'; 
        
        this.reader = function() { 
          var xhttp = new XMLHttpRequest();  
             xhttp.onreadystatechange = function() {
        
                 if (this.readyState === 4 && this.status === 200) { 
                   var response = JSON.parse(xhttp.responseText);
                   var url = response.september;
         console.log(url);
         var i;
          for (i = 0; i < url.length; i++) {
            var cat = ` 
            <div id="${url[i].did}" class="blogDiv"> 
            <hr />  
            <a href="#top"><button>Top</button></a>  
            <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  
            <h5 id="cat3" class="  subdailytech">${url[i].cat3}</h5> 
            <p id="author" class="  author">${url[i].author}</p>   
            <h6  id="date" class="  chapternumber">${url[i].date}</h6>    
            <h6  id="title"   class="dailytitle chapternumber">${url[i].title}</h6>
            <br />
            <div id="post">${url[i].post}
            </div>
            <div id="blogcite">${url[i].blogcite}
            </div>`;  
             document.getElementById('readers').innerHTML += cat; 
            }
              }
             };
             xhttp.open("GET", "posts/september.json", true);
             xhttp.send();
          };
         
      }
    ]
  });
