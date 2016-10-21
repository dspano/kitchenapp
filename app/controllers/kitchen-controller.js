(function() {
	angular.module('controllers', [])

	.controller("KitchenController", ["$scope", 'ListingDataService', 'PhotoProcessingService', function($scope, ListingDataService, PhotoProcessingService) {
		$scope.listings = ListingDataService;
		// $scope.tokens = {};
		// $scope.photoDesc = {};
		// $scope.processedPhotos = {};rvice;


		// for (var i =0; i < listingList.length; i++) {
		// 	var photos = listingList[i].photos;
		// 	for( var j = 0; j < photos.length; j++) {
		// 		var key = photos[j].key;
		// 		var photo_url = photos[j].photo_url;
		// 		getTokenResponse($scope, PhotoProcessingService, photo_url, key);
		// 	}
		// }


		function getTokenResponse($scope, PhotoProcessingService, url, key) {
	    var promise = PhotoProcessingService.processPhotos(url);
	    promise.then(function(result) {  
	       // this is only run after processPhotos() resolves
	       
				$scope.tokens[key] = result.token;
				while($scope.tokens[key] == undefined) {};
				getDescResponse($scope, PhotoProcessingService, key);

				if ($scope.processedPhotos[key] == undefined) {
					$scope.processedPhotos[key] = [];
				}
				$scope.processedPhotos[key].push( { photo: url, token: result.token, recognitionDesc: "", desc: $scope.photoDesc[key] });
	    });
		}

		function getDescResponse($scope, PhotoProcessingService, key) {
	    var promise = PhotoProcessingService.getDescription($scope.tokens[key]);
	    promise.then(function(result) {  
				// this is only run after processPhotos() resolves
	

				$scope.photoDesc[key] = result.name;
	    });
		}
	}]);
})();
















								
								
								
								
								
								
								