(function() {
	angular.module('controllers', [])

	.controller("KitchenController", ["$scope", 'ListingDataService', function($scope, ListingDataService) {
		var listingMap = ListingDataService;
		// $scope.listings = PhotoProcessingService.processPhotos(listingMap);
	}]);
})();
