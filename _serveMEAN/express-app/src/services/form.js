'use static';

var app = angular.module("modalFormApp", ['ui.bootstrap']);
app.controller("modalAccountFormController", ['$scope', '$modal', '$log',

    function ($scope, $modal, $log) {

        $scope.showForm = function () {
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'services/form.html',
                controller: ModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


        var ModalInstanceCtrl = function ($scope, $modalInstance, userForm) {
            $scope.form = {}
            $scope.submitForm = function () {
                if ($scope.form.userForm.$valid) {
                    console.log('user form is in scope');
                    $modalInstance.close('closed');
                } else {
                    console.log('userform is not in scope');
                }
            };
        
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };


            $scope.readerz = function() { 
                var xhttp = new XMLHttpRequest();  
                   xhttp.onreadystatechange = function() {
              
                       if (this.readyState == 4 && this.status == 200) { 
                         var response = JSON.parse(xhttp.responseText);
                         var url = response.september; 
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
                   document.getElementById('readerz-div').innerHTML += cat; 
                  }
                    }
                   };
                   xhttp.open("GET", "posts/september.json", true);
                   xhttp.send();
                }; 
                  /*var person = {
                    name: "Brad",
                    age: 35,
                    address:{
                      street:"5 main st",
                      city: "Boston"
                    },
                    children:["Brianna", "Nicholas"]
                  } 
                  //person = JSON.stringify(person);
                  //person = JSON.parse(person); 
                  var people = [ 
                    {
                      name:"John",
                      age:40
                    },
                    {
                      name:"Sara",
                      age:25
                    }
                  ]; 
                  //console.log(people[1].age);
                  var output = '';
                  for(var i = 0;i < people.length;i++){
                    //console.log(people[i].name);
                    output += '<li>'+people[i].name+'</li>';
                  }
                  document.getElementById('people').innerHTML = output;
                  */ 
            
                //   // id="people"
                //  var xhttp = new XMLHttpRequest();
                //  xhttp.onreadystatechange = function() {
                //      if (this.readyState == 4 && this.status == 200) {
                //        var response = JSON.parse(xhttp.responseText);
                //        var people = response.people;
            
                //        var output = '';
                //        for(var i = 0;i < people.length;i++){
                //          output += '<li>'+people[i].name+'</li>';
                //        }
                //        document.getElementById('people').innerHTML = output;
                //      }
                //  };
                //  xhttp.open("GET", "people.json", true);
                //  xhttp.send();
             

        };

            }]);
