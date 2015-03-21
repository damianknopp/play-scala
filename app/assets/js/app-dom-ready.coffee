define(['angular', 'app'], (angular, app) ->
	angular.element(document).ready( ->
		console.log("document loaded!")
		angular.bootstrap(document, ['dmkAngularApp'])
	)
)