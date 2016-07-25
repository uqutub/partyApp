app.controller('LoginController', function ($scope, $state, $firebaseRef) {

	// var auth = $firebaseAuth();

	$scope.changeView = function (view) {
		$state.go(view);
	}
	var ref = $firebaseRef.default;
	// login with Facebook
	$scope.loginWithFb = function () {

		ref.authWithOAuthPopup("facebook", function (error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				$state.go('timeline');
				console.log("Authenticated successfully with payload:", authData);
			}
		});
	}




	// login with Twitter
	$scope.loginWithTwitter = function () {
		ref.authWithOAuthPopup("twitter", function (error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				$state.go('timeline');
				console.log("Authenticated successfully with payload:", authData);
			}
		});
	}

})


app.controller('TimelineController', function ($scope, $firebaseRef, $firebaseArray) {
	var ref = $firebaseRef.events;

	$scope.allEvents = $firebaseArray(ref);

	$scope.allEvents.$loaded(function (abc) {
		console.log("all events", abc)
	})

});

app.controller('CreateEventController', function ($scope, $state, $firebaseRef, Auth, $firebaseArray, $cordovaCamera, $cordovaGeolocation, $http) {



	document.addEventListener("deviceready", function () {

		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: false,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 100,
			targetHeight: 100,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false,
			correctOrientation: true
		};

		$scope.captureImage = function () {
			console.log("capture image running")

			$cordovaCamera.getPicture(options)
				.then(function (imageData) {

					$scope.event.eventImage = "data:image/jpeg;base64," + imageData;

					console.log("image just captured", $scope.event.eventImage)
				}, function (err) {
					// error
				});
		}
	}, false);


	$scope.event = {
		postedOn: Firebase.ServerValue.TIMESTAMP
	}
	$scope.createEvent = function () {
		// Grab user current Location if Location service is enabled by user in android otherwise error callback will be called;
		var posOptions = { timeout: 10000, enableHighAccuracy: false };

		$cordovaGeolocation
			.getCurrentPosition(posOptions)
			.then(function (position) {
				console.info("first promise called in create event function");

				var lat = position.coords.latitude;
				var long = position.coords.longitude;
				console.log("user's location", position.coords);

				// create a new party event and save it in firebase
				console.log('party', $scope.event);

				// $scope.event.userLocation = { latitude: lat, longitude: long }

				$http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long)
					.then(function (response) {

						console.log("users parsed location is ", response.data.results[3]);
						$scope.event.userLocation = response.data.results[3].formatted_address;
					});


			})
			.then(function () {
				console.info("second promise called in create event function");

				$scope.event.partyTime = $scope.event.partyTime.valueOf();
				var authObj = Auth;
				var auth = authObj.$getAuth()

				var ref = $firebaseRef.events.child(auth.uid);

				$firebaseArray(ref).$add($scope.event)
					.then(function () {
						// $scope.event = null;
					})


			})
			.catch(function (err) {
				console.log("an error accured ", err)
			})







	}

});

app.controller('EventDetailsController', function () {

});

app.controller('SettingsController', function ($scope, $state) {

	$scope.changeView = function (view) {
		$state.go(view);
	}

});

app.controller('MyEventsController', function ($scope, $state) {

	$scope.changeView = function (view) {
		$state.go(view);
	}

});

app.controller('FollowingController', function ($scope, $state) {

	$scope.changeView = function (view) {
		$state.go(view);
	}

});

app.controller('CustomizationController', function ($scope, $state) {

	$scope.changeView = function (view) {
		$state.go(view);
	}

});

app.controller('SubscriptionController', function ($scope, $state) {

	$scope.changeView = function (view) {
		$state.go(view);
	}

});
