define(['angular'], (angular) ->
	loginAppControllers = angular.module('dmkUserLoginControllers', [])
	loginAppControllers.controller('StatusListController', ['$scope', '$http', ($scope, $http) ->
		$http.get("/status/all").success((resp) ->
			$scope.statusAll = resp
		)
		self
	])
	
	loginAppControllers.controller('StatusDetailController', ['$scope', '$http', '$routeParams', ($scope, $http, $routeParams) ->
		$scope.loginId = $routeParams.loginId
		$http.get("/status/#{$routeParams.loginId}").success((resp) ->
			$scope.statusDetails = resp
		)
		self
	])
	
	loginAppControllers.controller('StatusHeaderController', ['$scope', '$location', ($scope, $location) ->
		$scope.path = $location.path()
		$scope.isHome = yes if $scope.path is '/ui/status/list'
		self
	])
)