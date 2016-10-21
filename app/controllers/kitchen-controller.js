(function() {
	angular.module('controllers', [])

	.controller("KitchenController", ["$scope", 'ListingDataService', 'PhotoProcessingService', function($scope, ListingDataService, PhotoProcessingService) {
		var listingList = ListingDataService;
		$scope.tokens = {};
		$scope.photoDesc = {};
		$scope.processedPhotos = {};

		// for (var i =0; i < listingList.length; i++) {
		// 	var photos = listingList[i].photos;
		// 	for( var j = 0; j < photos.length; j++) {
		// 		var key = photos[j].key;
		// 		var photo_url = photos[j].photo_url;
		// 		getTokenResponse($scope, PhotoProcessingService, photo_url, key);
		// 	}
		// }
		$scope.listings = [
			{listingKey: "300098641897", photos: [{desc: "Exterior (General)", photo: "http://coremedia.mris.com/image/V2/1/Q1oTn754oWQEmbXQFrYKlAt64qM9Pdxf9sFG6rBxaioW8IdTYSGQQ9-rebb3WuAV1i7rj4HL81VcH4RnM9Z7vg.jpg"}, {desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/ss8wofiVEWn588G7N1JO5oI06ggC0fBPsMXLXsPacVfgtTjMl95FLSwKZvMF0Mf1FMqz-dAla9RHQnZcRxXMMw.jpg"}], livingArea: "5515", bathsHalf: "2", bathsFull: "5", beds: "6", ListingID: "AX9772441", listPrice: "3395000", address: "7205 PARK TERRACE DRIVE, ALEXANDRIA, VA 22307,", remarks: "Spectacular home on coveted Mansion Dr with 6,000+ finished sq ft. Extraordinary residence features 6 bedrooms, 5 full bathrooms, 2 half baths, grand kitchen, main level bedroom suite & expansive lower level. This stunning home is ideal for large scale entertaining. Private tranquil grounds with waterfall, fishpond, private terraces, custom hot tub, outdoor kitchen & two time award winning gardens" },
			{listingKey: "300096333006", photos: [{desc: "Exterior (Front)", photo: "http://coremedia.mris.com/image/V2/1/ro4oxITWBfCUx9trkVyBAnyKBC85Nzc0JVeFeTQzDzgzR0CH6sj3lujwP7E3qhmkmS99AzknNtRa_bz0fypHuA.jpg"}, {desc: "Kitchen", photo:	"http://coremedia.mris.com/image/V2/1/JaslJH6sUwaUEv5MhU_36KLg1yYJLjvuzqqXrsnLAMRv_NzynMdlX1xVR2JTMdIkQI1gw2bWDKVfrssksfZ9rg.jpg"}], livingArea: "0",    bathsHalf: "1", bathsFull: "2", beds: "3", ListingID: "AX9774221", listPrice: "1184500", address: "9417 MOUNT VERNON CIRCLE, ALEXANDRIA, VA 22309,", remarks: "Detached Colonial Revival is fully remodeled: new kit w/solid maple cabinetry, farm sink, Viking and Sub Zero appliances; new addition including a luxurious M/Bath w/claw foot tub, carerra marble, and heated floors, huge walk-in closet; new systems; new front porch w/gated courtyard; new 3-season rear porch with outdoor kit. that opens to large enchanting, private, 2-level, brick walled garden." },
			{listingKey: "300101388284", photos: [{desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/JCbxK1hI-4Hfp8O5X8x8qw95o7LbD-Z0t344bOnN_TZFRfbmDVw2sRsgixGHSML_zhNqtfTYYngvitHIyz9luw.jpg"}, {desc: "Exterior (Front)", photo:	"http://coremedia.mris.com/image/V2/1/NV3E1oJkPclYhIk3Vw_ru2s9alStEBBZFAA8E2loLqBN8yK8atWfBDzi5L5Lx7UdaJ18FM0kenpRp3UfuwIb1w.jpg"}], livingArea: "4150", bathsHalf: "1", bathsFull: "4", beds: "4", ListingID: "AX9778083", listPrice: "1190000", address: "21 W GLENDALE AVENUE, ALEXANDRIA, VA 22301,", remarks: "Built in 1930 and totally renovated in 1990 with more than 4,000 sq ft of living space with a flowing, open floor plan, exquisite architectural details that are true to the Art and Craft Period, Hardwood floors, marble entry and custom trim.  Wrap around front and side porch and back yard deck and patio with fenced yard. Please give agent 2 hour notice for showing" },
			{listingKey: "300100821658", photos: [{desc: "Exterior (Front)", photo:	"http://coremedia.mris.com/image/V2/1/o07rcTmpTUC3KoEyIsSV6xrNWjcVO35GKYWSLwPQJvbLiYCC_rpQYnImaSv-ka89AeTjfEevYUqYNg1bfJ03Dw.jpg"}, {desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/fb3JokqWxKl7xEhCmjNEIl90MElVaZ6fd4kgk2yR0FY7Htk4fxla7N5oKzrr407ID74YDpavUA1ogziC7aKwbg.jpg"}], livingArea: "6927", bathsHalf: "1", bathsFull: "4", beds: "5", ListingID: "FX9781949", listPrice: "1200000", address: "402 NORTH SAINT ASAPH STREET, ALEXANDRIA, VA 22314,", remarks: "Stately three level brick colonial located in Mount Vernon On The Potomac.Well cared maintained with one of the LARGEST floorplans!Updates include a large new gourmet kitchen with custom granite counters, high-end KutchenAid stainless steel appliances.Hardwoods floors have been refinished throughout and the house has been freshly painted.Lots of recessed lights recently added." },
			{listingKey: "300105823977", photos: [{desc: "Large kitchen with marble and custom tiles!", photo: "http://coremedia.mris.com/image/V2/1/0WAUrwOYEw7PLsGOa1De858A1nb9yrqwMUUpU-H1m5nRcmeoaRKIwuLs0EarQ2um2DKw_YeXoZ28SR3In05-AQ.jpg"}, {desc: "Exterior (Front)", photo: "http://coremedia.mris.com/image/V2/1/CVn9D4cmLaE3ctqiVv3yxFOFImuJiiqguk2MuevFNgQoezFw0gg-1G3YPR1o7hl2Wk53wPSVYaKdwxpye-0afw.jpg"}],livingArea: "4456", bathsHalf: "0", bathsFull: "3", beds: "4", ListingID: "FX9789376", listPrice: "1190000", address: "310 MANSION DRIVE, ALEXANDRIA, VA 22302,", remarks: "Absolutely a UNIQUE PROPERTY! Why not have everything Beautiful house and a wonderful LIFSTYLE, Breathtaking Potomac water view! One of the best location in DC area! Minutes To Metro, work sites, airport! Just bike to one of the BEST BIKE PATHS along the river and several marinas across the street. OVER 200K WORTH OF IMPROVEMENT! All new wiring and plumbing, brand new appliances! Bathrooms, deck!" },
			{listingKey: "300105029685", photos: [{desc: "Exterior (Front)", photo: "http://coremedia.mris.com/image/V2/1/2GT0Fjiu1BA8_Crlz3sXum_p5meChTIkr-fNlB0H79Hb92lemFfa6gd-AfXDB9aV1o3g4zFGo-Ik3RpUagJkcg.jpg"}, {desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/yZz59zgxayaFtRvN0N4KYDQqw-ZAZbZkwRG__Nip8D-03bLUHTXgLqR9OSrPqPWDp9RSTSRsJmsmF6sgctazJQ.jpg"}],livingArea: "5600", bathsHalf: "3", bathsFull: "4", beds: "5", ListingID: "AX9789953", listPrice: "2375000", address: "2436 RIDGE ROAD DRIVE, ALEXANDRIA, VA 22302,", remarks: "Stunning new custom built home on a beautiful lot in Braddock Heights. 10 foot ceilings main floor, great natural light. Quality materials and craftsmanship. Large gourmet kitchen, breakfast room, great room with wood burning fireplace. Library. Master suite with dual master baths, sitting room, fireplace, walk in closets. Oversized two car garage. Media room, lower level bedroom." },
			{listingKey: "300094409672", photos: [{desc: "Exterior (General)", photo: "http://coremedia.mris.com/image/V2/1/Us9OCzvk4_8VWV6dmOWLfKzxlOyOvGEVyFO5ykp7aTSOIhjDf85EYM15Sol0hhBI41VBOMR2bd9gsjEMqoqTlA.jpg"}, {desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/PbERaCCSbgvoH0kEeNsgaBxjUkn_GQHFmz3v-emJ9Qip1F8gzDSMHMpW5wlRRpY7iKAGZ5jaoxHdRwFJMWcqMw.jpg"}], livingArea: "5602", bathsHalf: "2", bathsFull: "4", beds: "4", ListingID: "FX9763686", listPrice: "3495000", address: "6210 FOXCROFT ROAD, ALEXANDRIA, VA 22307,", remarks: "A Rare Avis  Spectacular Best Describes the Views from this Unique Water Front Home Overlooking Potomac River is an Entertainer's Dream with 180 degree Views of the Water ! \" Open Floor Plan \" Wolf and Sub Zero Appliances, Elevator, Jacuzzi on the 2nd Floor Balcony, Designer Kitchen, Custom Habersham Dressing Room,  3 HVAC sys., Heated Floors, 3x3 Marble floors, .5 Acre Setting, 2 Boat Lifts." },
			{listingKey: "300095137845", photos: [{desc: "Exterior (Front)", photo: "http://coremedia.mris.com/image/V2/1/JuN8YSwK_lYcCVuN1WG2CD3uEDL05nYJ6Fm8lVpzN84Emto5gjCUWhcHTjdIZJlPvIrD8v3-EkLZCaKkAcLxLA.jpg"}, {desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/dZWXE8NtYPD9AffYAEXX_fpKdwlMnsv66P75sNDv1cAakXGkIfOaJmVDvMve8tScFvR_D7Y8_3DZv5UzMcEMEg.jpg"}], livingArea: "2680", bathsHalf: "1", bathsFull: "3", beds: "4", ListingID: "FX9766849", listPrice: "1099000", address: "4736 NEPTUNE DRIVE, ALEXANDRIA, VA 22309,", remarks: "Sited  on a lot in the heart of Belle Haven, this extraordinary 4BR, 3.5 BA colonial offers a gracious living room with a fireplace,separate dining room, updated kitchen with granite counters and sitting/eat-in area, lower level family room with a fireplace, wet bar  and full bath, lovely screened porch and deck for summer enjoyment, and two car garage" }
		];

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
				$scope.processedPhotos[key].push( { photo: url, token: result.token, desc: $scope.photoDesc[key] });
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
















								
								
								
								
								
								
								