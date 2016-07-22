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


app.controller('TimelineController', function () {

});

app.controller('CreateEventController', function ($scope, $state, $firebaseRef, Auth, $firebaseArray, $cordovaCamera) {

	// $scope.changeView = function (view) {
	// 	$state.go(view);
	// }

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

					console.log("image just captured", $scope.image)
				}, function (err) {
					// error
				});
		}
	}, false);


	$scope.event = {

	}

	$scope.createEvent = function () {
		console.log('party', $scope.event);
		$scope.event.partyTime = $scope.event.partyTime.valueOf();
		var authObj = Auth;

		var auth = authObj.$getAuth()

		// console.log("auth auth", auth)


		// $scope.auth.$onAuth(function (authData) {
		// 	// $scope.authData = authData;
		// 	console.log('authData', authData)
		// });


		var ref = $firebaseRef.default.child(auth.uid);

		$firebaseArray(ref).$add($scope.event)
			.then(function () {
				// $scope.event = null;
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
