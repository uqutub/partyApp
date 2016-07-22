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

app.controller('CreateEventController', function ($scope, $state, $firebaseRef, Auth, $firebaseArray) {

	// $scope.changeView = function (view) {
	// 	$state.go(view);
	// }
	$scope.event = {}

	$scope.createEvent = function () {
		console.log('party', $scope.event);

		var authObj = Auth;

		var auth = authObj.$getAuth();
		// console.log("auth auth", auth)


		// $scope.auth.$onAuth(function (authData) {
		// 	// $scope.authData = authData;
		// 	console.log('authData', authData)
		// });

		$scope.event.partyTime = $scope.event.partyTime.valueOf();
		var ref = $firebaseRef.default.child(auth.uid);

		$firebaseArray(ref).$add($scope.event);

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
