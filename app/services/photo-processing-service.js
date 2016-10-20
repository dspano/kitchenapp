'use-strict';

angular.module('services')
.service("PhotoProcessingService", function() {
		return {
			processPhotos: function(listings) {
				return listings;
			}
		}
});