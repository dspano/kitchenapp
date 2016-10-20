'use-strict';

angular.module('services', [])
.service("ListingDataService", [function() {
		var photoUrlMap = [
			{ key: "300096333006", photo_desc: "Exterior (Front)", photo_url: "http://coremedia.mris.com/image/V2/1/ro4oxITWBfCUx9trkVyBAnyKBC85Nzc0JVeFeTQzDzgzR0CH6sj3lujwP7E3qhmkmS99AzknNtRa_bz0fypHuA.jpg" },
			{	key: "300096333006", photo_desc: "Kitchen", photo_url: "http://coremedia.mris.com/image/V2/1/JaslJH6sUwaUEv5MhU_36KLg1yYJLjvuzqqXrsnLAMRv_NzynMdlX1xVR2JTMdIkQI1gw2bWDKVfrssksfZ9rg.jpg" },
			{ key: "300098641897", photo_desc: "Exterior (General)", photo_url: "http://coremedia.mris.com/image/V2/1/Q1oTn754oWQEmbXQFrYKlAt64qM9Pdxf9sFG6rBxaioW8IdTYSGQQ9-rebb3WuAV1i7rj4HL81VcH4RnM9Z7vg.jpg" },
			{ key: "300098641897", photo_desc: "Kitchen", photo_url: "http://coremedia.mris.com/image/V2/1/ss8wofiVEWn588G7N1JO5oI06ggC0fBPsMXLXsPacVfgtTjMl95FLSwKZvMF0Mf1FMqz-dAla9RHQnZcRxXMMw.jpg" },
			{ key: "300100821658", photo_desc: "Exterior (Front)", photo_url: "http://coremedia.mris.com/image/V2/1/o07rcTmpTUC3KoEyIsSV6xrNWjcVO35GKYWSLwPQJvbLiYCC_rpQYnImaSv-ka89AeTjfEevYUqYNg1bfJ03Dw.jpg" },
			{ key: "300100821658", photo_desc: "Kitchen", photo_url: "http://coremedia.mris.com/image/V2/1/fb3JokqWxKl7xEhCmjNEIl90MElVaZ6fd4kgk2yR0FY7Htk4fxla7N5oKzrr407ID74YDpavUA1ogziC7aKwbg.jpg" },
			{ key: "300101388284", photo_desc: "Kitchen", photo_url: "http://coremedia.mris.com/image/V2/1/JCbxK1hI-4Hfp8O5X8x8qw95o7LbD-Z0t344bOnN_TZFRfbmDVw2sRsgixGHSML_zhNqtfTYYngvitHIyz9luw.jpg" },
			{ key: "300101388284", photo_desc: "Exterior (Front)", photo_url: "http://coremedia.mris.com/image/V2/1/NV3E1oJkPclYhIk3Vw_ru2s9alStEBBZFAA8E2loLqBN8yK8atWfBDzi5L5Lx7UdaJ18FM0kenpRp3UfuwIb1w.jpg" },
			{ key: "300105823977", photo_desc: "Large kitchen with marble and custom tiles!", photo_url: "http://coremedia.mris.com/image/V2/1/0WAUrwOYEw7PLsGOa1De858A1nb9yrqwMUUpU-H1m5nRcmeoaRKIwuLs0EarQ2um2DKw_YeXoZ28SR3In05-AQ.jpg" },
			{ key: "300105823977", photo_desc: "Exterior (Front)", photo_url: "http://coremedia.mris.com/image/V2/1/CVn9D4cmLaE3ctqiVv3yxFOFImuJiiqguk2MuevFNgQoezFw0gg-1G3YPR1o7hl2Wk53wPSVYaKdwxpye-0afw.jpg" }
		];

		var listingMap = [
			{
				listingKey: "300098641897",
				listPrice: "3395000",
				listingID: "AX9772441"
			},
			{
				listingKey: "300096333006",
				listPrice: "1184500",
				listingID: "AX9774221"
			},
			{
				listingKey: "300101388284",
				listPrice: "1190000",
				listingID: "AX9778083"
			},
			{
				listingKey: "300100821658",
				listPrice: "1200000",
				listingID: "FX9781949"
			},
			{
				listingKey: "300105823977",
				listPrice: "1190000",
				listingID: "FX9789376"
			}
		];

		var listingList = [];
		for(var i = 0; i < listingMap.length; i++) {
			var temp = {};
			var photoList = [];
			
			var key = listingMap[i].listingKey

			for( var j = 0; j < photoUrlMap.length; j++) {
				if (photoUrlMap[j].key == key) {
					var photoMap = {};
					photoMap["photo_url"] = photoUrlMap[j].photo_url;
					photoMap["photo_desc"] = photoUrlMap[j].photo_desc;
					photoMap["key"] = key;
					photoList.push(photoMap);
				}
			}
	
			temp["key"] = key;
			temp["listPrice"] = listingMap[i].listPrice
			temp["listingID"] = listingMap[i].listingID
			temp["photos"] = photoList;
			listingList.push(temp);
		}

	return listingList;
}]);





