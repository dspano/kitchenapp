(function() {
	angular.module('controllers', [])

	.controller("KitchenController", ["$scope", 'ListingDataService', 'PhotoProcessingService', function($scope, ListingDataService, PhotoProcessingService) {
		var lookupMap = {};
		var listingList = ListingDataService;
		for (var i =0; i < listingList.length; i++) {
			var photos = listingList[i].photos;
			for( var j = 0; j < photos.length; j++) {
				$scope.photo = photos[j];
				// console.log($scope.photo);
				// getTokenResponse($scope, PhotoProcessingService);
			}
			photo;
		}

		function getTokenResponse($scope, PhotoProcessingService) {
	    var promise = PhotoProcessingService.processPhotos($scope.photo);
	    promise.then(function(result) {  
	       // this is only run after processPhotos() resolves
	       $scope.token = result.token;
	       $scope.desc = getDescResponse($scope, PhotoProcessingService);
	    });
		}

		function getDescResponse($scope, PhotoProcessingService) {
	    var promise = PhotoProcessingService.getDescription($scope.token);
	    promise.then(function(result) {  
				// this is only run after processPhotos() resolves
				$scope.desc = result.name;
				console.log("token:");
       	console.log($scope.token);
       	console.log("Desc:");
       	console.log($scope.desc);
	    });
		}
	}]);
})();
