define(['app'], (app) ->
	window.dmkAngularApp.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
		
		html5Mode = $locationProvider.html5Mode(enabled: true, requireBase: false, rewriteLinks: true)
		#html5Mode.hashPrefix('')

		$routeProvider
		.when('/ui/status/list',
			templateUrl: '/assets/partials/status-list.html',
			controller: 'StatusListController'
		)
		.when('/ui/status/:loginId',
		    templateUrl: '/assets/partials/status-detail.html',
		    controller: 'StatusDetailController'
		 )
		.otherwise(redirectTo: '/ui/status/list')
		
	 ])
)