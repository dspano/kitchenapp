'use-strict';

angular.module('services')
.service("PhotoProcessingService", [ '$http', function($http) {
		var apiKey = "N-6mddmrove_sTT8y_l1tQ";
		
		var processPhotos = function(photoUrl) {
			var url = "http://api.cloudsightapi.com/image_requests/";
 			$http.defaults.headers.common.Authorization = 'CloudSight ' + apiKey;

 			var dataForm = "image_request[remote_image_url]="+photoUrl+"&image_request[locale]=en-US";

			return $http({
				method: 'POST',
				url:url,
				data: (dataForm),
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function(response) {
				console.log("success!");
				console.log(response.data.token);
				return response.data;
		  });
		};

		var getDescription = function(token) {
			$http.defaults.headers.common.Authorization = 'CloudSight ' + apiKey;
			var url = "https://api.cloudsightapi.com/image_responses/" + token;

			return $http({
				method: 'GET',
				url:url
			}).then(function(response) {
				console.log("success!");
				console.log(response);
				return response.data;
			});
		};

		return { processPhotos: processPhotos, getDescription: getDescription };
}]);