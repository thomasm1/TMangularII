var app = angular
    .module("SensorScraper", [])
    .controller("tierScrapeController", function ($scope, $rootScope) {
        $rootScope.rootScopeScraper = "Root Scope Scraper";
        $scope.tierScrape = "Tier Scrape";
    })
    .controller("nadirScrapeController", function ($scope) {
        $scope.nadirScrape = "Nadir Scrape";
    })a
    .controller("midController", function ($http, $route) {
        var vm = this;
        
        vm.reloadData = function () {
            $route.reload();
        }
        $http.get("dataScrape.asmx/GetAllScrapes")
           .then(function (response) {
              vm.students = response.data;
           })
        })
 /*       
 <!--View HTML-->
 <button ng-click="midCtrl.reloadData()">Rescrape</button>
 */
