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

		var listings = [
			{listingKey: "300098641897", rdcLink: "http://www.realtor.com/realestateandhomes-search?mlslid= AX9772441", photos: [{recognitionDesc: "gray pathway between green tree during daytime", desc: "Exterior (General)", photo: "http://coremedia.mris.com/image/V2/1/Q1oTn754oWQEmbXQFrYKlAt64qM9Pdxf9sFG6rBxaioW8IdTYSGQQ9-rebb3WuAV1i7rj4HL81VcH4RnM9Z7vg.jpg"}, {recognitionDesc: "white wooden kitchen counter top", desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/ss8wofiVEWn588G7N1JO5oI06ggC0fBPsMXLXsPacVfgtTjMl95FLSwKZvMF0Mf1FMqz-dAla9RHQnZcRxXMMw.jpg"}], livingArea: "5515", bathsHalf: "2", bathsFull: "5", beds: "6", ListingID: "AX9772441", listPrice: "3395000", address: "7205 PARK TERRACE DRIVE, ALEXANDRIA, VA 22307,", remarks: "Spectacular home on coveted Mansion Dr with 6,000+ finished sq ft. Extraordinary residence features 6 bedrooms, 5 full bathrooms, 2 half baths, grand kitchen, main level bedroom suite & expansive lower level. This stunning home is ideal for large scale entertaining. Private tranquil grounds with waterfall, fishpond, private terraces, custom hot tub, outdoor kitchen & two time award winning gardens" },
			{listingKey: "300096333006", rdcLink: "http://www.realtor.com/realestateandhomes-search?mlslid= AX9774221", photos: [{recognitionDesc: "green leaf plant in front of white and green painted house", desc: "Exterior (Front)", photo: "http://coremedia.mris.com/image/V2/1/ro4oxITWBfCUx9trkVyBAnyKBC85Nzc0JVeFeTQzDzgzR0CH6sj3lujwP7E3qhmkmS99AzknNtRa_bz0fypHuA.jpg"}, {recognitionDesc: "beige wooden kitchen cabinets", desc: "Kitchen", photo:	"http://coremedia.mris.com/image/V2/1/JaslJH6sUwaUEv5MhU_36KLg1yYJLjvuzqqXrsnLAMRv_NzynMdlX1xVR2JTMdIkQI1gw2bWDKVfrssksfZ9rg.jpg"}], livingArea: "0",    bathsHalf: "1", bathsFull: "2", beds: "3", ListingID: "AX9774221", listPrice: "1184500", address: "9417 MOUNT VERNON CIRCLE, ALEXANDRIA, VA 22309,", remarks: "Detached Colonial Revival is fully remodeled: new kit w/solid maple cabinetry, farm sink, Viking and Sub Zero appliances; new addition including a luxurious M/Bath w/claw foot tub, carerra marble, and heated floors, huge walk-in closet; new systems; new front porch w/gated courtyard; new 3-season rear porch with outdoor kit. that opens to large enchanting, private, 2-level, brick walled garden." },
			{listingKey: "300101388284", rdcLink: "http://www.realtor.com/realestateandhomes-search?mlslid= AX9778083", photos: [{recognitionDesc: "white and black bead toaster beside brown cup in kitchen", desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/JCbxK1hI-4Hfp8O5X8x8qw95o7LbD-Z0t344bOnN_TZFRfbmDVw2sRsgixGHSML_zhNqtfTYYngvitHIyz9luw.jpg"}, {recognitionDesc: "white wooden house near the trees", desc: "Exterior (Front)", photo:	"http://coremedia.mris.com/image/V2/1/NV3E1oJkPclYhIk3Vw_ru2s9alStEBBZFAA8E2loLqBN8yK8atWfBDzi5L5Lx7UdaJ18FM0kenpRp3UfuwIb1w.jpg"}], livingArea: "4150", bathsHalf: "1", bathsFull: "4", beds: "4", ListingID: "AX9778083", listPrice: "1190000", address: "21 W GLENDALE AVENUE, ALEXANDRIA, VA 22301,", remarks: "Built in 1930 and totally renovated in 1990 with more than 4,000 sq ft of living space with a flowing, open floor plan, exquisite architectural details that are true to the Art and Craft Period, Hardwood floors, marble entry and custom trim.  Wrap around front and side porch and back yard deck and patio with fenced yard. Please give agent 2 hour notice for showing" },
			{listingKey: "300100821658", rdcLink: "http://www.realtor.com/realestateandhomes-search?mlslid= FX9781949", photos: [{recognitionDesc: "brown and black house  in front of green lawn during daytime", desc: "Exterior (Front)", photo:	"http://coremedia.mris.com/image/V2/1/o07rcTmpTUC3KoEyIsSV6xrNWjcVO35GKYWSLwPQJvbLiYCC_rpQYnImaSv-ka89AeTjfEevYUqYNg1bfJ03Dw.jpg"}, {recognitionDesc: "brown island kitchen counter", desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/fb3JokqWxKl7xEhCmjNEIl90MElVaZ6fd4kgk2yR0FY7Htk4fxla7N5oKzrr407ID74YDpavUA1ogziC7aKwbg.jpg"}], livingArea: "6927", bathsHalf: "1", bathsFull: "4", beds: "5", ListingID: "FX9781949", listPrice: "1200000", address: "402 NORTH SAINT ASAPH STREET, ALEXANDRIA, VA 22314,", remarks: "Stately three level brick colonial located in Mount Vernon On The Potomac.Well cared maintained with one of the LARGEST floorplans!Updates include a large new gourmet kitchen with custom granite counters, high-end KutchenAid stainless steel appliances.Hardwoods floors have been refinished throughout and the house has been freshly painted.Lots of recessed lights recently added." },
			{listingKey: "300105823977", rdcLink: "http://www.realtor.com/realestateandhomes-search?mlslid= FX9789376", photos: [{recognitionDesc: "black wooden cabinet in kitchen interior", desc: "Large kitchen with marble and custom tiles!", photo: "http://coremedia.mris.com/image/V2/1/0WAUrwOYEw7PLsGOa1De858A1nb9yrqwMUUpU-H1m5nRcmeoaRKIwuLs0EarQ2um2DKw_YeXoZ28SR3In05-AQ.jpg"}, {recognitionDesc: "brown concrete house near green leaf trees under clear sky during daytime", desc: "Exterior (Front)", photo: "http://coremedia.mris.com/image/V2/1/CVn9D4cmLaE3ctqiVv3yxFOFImuJiiqguk2MuevFNgQoezFw0gg-1G3YPR1o7hl2Wk53wPSVYaKdwxpye-0afw.jpg"}],livingArea: "4456", bathsHalf: "0", bathsFull: "3", beds: "4", ListingID: "FX9789376", listPrice: "1190000", address: "310 MANSION DRIVE, ALEXANDRIA, VA 22302,", remarks: "Absolutely a UNIQUE PROPERTY! Why not have everything Beautiful house and a wonderful LIFSTYLE, Breathtaking Potomac water view! One of the best location in DC area! Minutes To Metro, work sites, airport! Just bike to one of the BEST BIKE PATHS along the river and several marinas across the street. OVER 200K WORTH OF IMPROVEMENT! All new wiring and plumbing, brand new appliances! Bathrooms, deck!" },
			{listingKey: "300105029685", rdcLink: "http://www.realtor.com/realestateandhomes-search?mlslid= AX9789953", photos: [{recognitionDesc: "gray and white house surrounded with trees", desc: "Exterior (Front)", photo: "http://coremedia.mris.com/image/V2/1/2GT0Fjiu1BA8_Crlz3sXum_p5meChTIkr-fNlB0H79Hb92lemFfa6gd-AfXDB9aV1o3g4zFGo-Ik3RpUagJkcg.jpg"}, {recognitionDesc: "white kitchen cabinet with gas range near white window pane", desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/yZz59zgxayaFtRvN0N4KYDQqw-ZAZbZkwRG__Nip8D-03bLUHTXgLqR9OSrPqPWDp9RSTSRsJmsmF6sgctazJQ.jpg"}],livingArea: "5600", bathsHalf: "3", bathsFull: "4", beds: "5", ListingID: "AX9789953", listPrice: "2375000", address: "2436 RIDGE ROAD DRIVE, ALEXANDRIA, VA 22302,", remarks: "Stunning new custom built home on a beautiful lot in Braddock Heights. 10 foot ceilings main floor, great natural light. Quality materials and craftsmanship. Large gourmet kitchen, breakfast room, great room with wood burning fireplace. Library. Master suite with dual master baths, sitting room, fireplace, walk in closets. Oversized two car garage. Media room, lower level bedroom." },
			{listingKey: "300094409672", rdcLink: "http://www.realtor.com/realestateandhomes-search?mlslid= FX9763686", photos: [{recognitionDesc: "white concrete house near body of water", desc: "Exterior (General)", photo: "http://coremedia.mris.com/image/V2/1/Us9OCzvk4_8VWV6dmOWLfKzxlOyOvGEVyFO5ykp7aTSOIhjDf85EYM15Sol0hhBI41VBOMR2bd9gsjEMqoqTlA.jpg"}, {recognitionDesc: "interior design of kitchen room", desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/PbERaCCSbgvoH0kEeNsgaBxjUkn_GQHFmz3v-emJ9Qip1F8gzDSMHMpW5wlRRpY7iKAGZ5jaoxHdRwFJMWcqMw.jpg"}], livingArea: "5602", bathsHalf: "2", bathsFull: "4", beds: "4", ListingID: "FX9763686", listPrice: "3495000", address: "6210 FOXCROFT ROAD, ALEXANDRIA, VA 22307,", remarks: "A Rare Avis  Spectacular Best Describes the Views from this Unique Water Front Home Overlooking Potomac River is an Entertainer's Dream with 180 degree Views of the Water ! \" Open Floor Plan \" Wolf and Sub Zero Appliances, Elevator, Jacuzzi on the 2nd Floor Balcony, Designer Kitchen, Custom Habersham Dressing Room,  3 HVAC sys., Heated Floors, 3x3 Marble floors, .5 Acre Setting, 2 Boat Lifts." },
			{listingKey: "300095137845", rdcLink: "http://www.realtor.com/realestateandhomes-search?mlslid= FX9766849", photos: [{recognitionDesc: "house surrounded with green plants", desc: "Exterior (Front)", photo: "http://coremedia.mris.com/image/V2/1/JuN8YSwK_lYcCVuN1WG2CD3uEDL05nYJ6Fm8lVpzN84Emto5gjCUWhcHTjdIZJlPvIrD8v3-EkLZCaKkAcLxLA.jpg"}, {recognitionDesc: "white wooden kitchen cabinet closed", desc: "Kitchen", photo: "http://coremedia.mris.com/image/V2/1/dZWXE8NtYPD9AffYAEXX_fpKdwlMnsv66P75sNDv1cAakXGkIfOaJmVDvMve8tScFvR_D7Y8_3DZv5UzMcEMEg.jpg"}], livingArea: "2680", bathsHalf: "1", bathsFull: "3", beds: "4", ListingID: "FX9766849", listPrice: "1099000", address: "4736 NEPTUNE DRIVE, ALEXANDRIA, VA 22309,", remarks: "Sited  on a lot in the heart of Belle Haven, this extraordinary 4BR, 3.5 BA colonial offers a gracious living room with a fireplace,separate dining room, updated kitchen with granite counters and sitting/eat-in area, lower level family room with a fireplace, wet bar  and full bath, lovely screened porch and deck for summer enjoyment, and two car garage" }
		];

	return listings;
}]);





