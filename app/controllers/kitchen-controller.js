(function() {
	angular.module('controllers', [])

	.controller("KitchenController", ["$scope", 'ListingDataService', 'PhotoProcessingService', function($scope, ListingDataService, PhotoProcessingService) {
		var listingMap = ListingDataService;
		$scope.listings = PhotoProcessingService.processPhotos(listingMap);
	}]);
})();
