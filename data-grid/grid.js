var grid = angular.module("grid", []);

grid.controller('emp', ['$scope', 'empService', function ($scope, empService) {
	$scope.doSearch = function () {
		//empService.getEmployees(function(r){
		//	$scope.employees = r;
		empService.findEmployeeById($scope.searchEmpno, function (r) {
			$scope.empno = r.empno;
			$scope.ename = r.ename;
			$scope.sal = r.sal;
			$scope.deptno = r.deptno;
			$scope.hiredate = r.hiredate;
			$scope.dob = r.dob;
		});
	};
}])

grid.service('empService', ['$http', '$log', function ($http, $log) {
	//this.getEmployees = function(cb) {
	this.findEmployeeById = function (empno, cb) {
		$http({
			url: 'http://localhost:8000/api/employees' + empno,
			method: 'GET'
		}).then(function (resp) {
			cb(resp.data);
		}, function (resp) {
			$log.error("ERROR occurred!!");
			debugger;
		});
	};
}]);
