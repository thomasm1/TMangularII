var app = angular.module("app", []);
app.controller('emp',['$scope', '$http', '$log', function($scope, $http,$log){
  $scope.a =10;
  $scope.b =20;

  $scope.doSum = function(){
    $http({
      url: 'http://localhost:3030/Sum?a=' +  $scope.a + '?b=' + $scope.b,
      method: 'GET'
    }).then(function(resp){
      $log.log(resp.data);
      $scope.sum = resp.data;
    }, function(resp){
      //fail
      $log.error("ERRROR!!");
    });
  };
}]);