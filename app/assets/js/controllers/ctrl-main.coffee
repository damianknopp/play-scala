define(['angular'], (angular) ->
	loginAppControllers = angular.module('dmkUserLoginControllers', [])
	loginAppControllers.controller('StatusListController', ['$scope', '$http', '$rootScope', ($scope, $http, $rootScope) ->
		$rootScope.isHome = yes
		$http.get("/status/all").success((resp) ->
			$scope.statusAll = resp
		)
		self
	])
	
	loginAppControllers.controller('StatusDetailController', 
		['$scope', '$http', '$routeParams', '$rootScope', ($scope, $http, $routeParams, $rootScope) ->
			$rootScope.isHome = false
			$scope.loginId = $routeParams.loginId
			$http.get("/status/#{$routeParams.loginId}").success((resp) ->
				$scope.statusDetails = resp
			)
			self
		])
	
	loginAppControllers.controller('StatusHeaderController', ['$scope', '$location', '$rootScope',($scope, $location, $rootScope) ->
		$scope.path = $location.path()
		$rootScope.isHome = yes if $scope.path is '/ui/status/list'
		self
	])
	
)