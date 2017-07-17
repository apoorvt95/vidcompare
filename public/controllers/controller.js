function AppCtrl($scope, $http){
	$http.get('/compare').sucess(function(response){
		$scope.compare = response ;
	});
}