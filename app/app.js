'use strict';

// Declare app level module which depends on views, and components
(function(angular) {
	angular.module('myApp', []).
	config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	  $locationProvider.hashPrefix('!');

	  $routeProvider.otherwise({redirectTo: '/view2'});
	}]).controller("myController", function($scope) {
		$scope.listing = "This is my Listing";
	});
})(angular);
