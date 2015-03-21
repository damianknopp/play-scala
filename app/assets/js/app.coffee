define(['angular', 'angular-route', 'controllers/ctrl-main'], (angular, route) ->
	window.dmkAngularApp = angular.module('dmkAngularApp', ['ngRoute', 'dmkUserLoginControllers'])
	window.dmkAngularApp
)