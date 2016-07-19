app.controller('LoginController',function($scope,$state){

	$scope.changeView = function(view){
		$state.go(view);
	}
	
});

app.controller('TimelineController',function(){
	
});

app.controller('CreateEventController',function($scope,$state){
	
	$scope.changeView = function(view){
		$state.go(view);
	}

});

app.controller('EventDetailsController',function(){
	
});

app.controller('SettingsController',function($scope,$state){
	
	$scope.changeView = function(view){
		$state.go(view);
	}
	
});

app.controller('MyEventsController',function($scope,$state){
	
	$scope.changeView = function(view){
		$state.go(view);
	}

});

app.controller('FollowingController',function($scope,$state){
	
	$scope.changeView = function(view){
		$state.go(view);
	}

});

app.controller('CustomizationController',function($scope,$state){
	
	$scope.changeView = function(view){
		$state.go(view);
	}

});

app.controller('SubscriptionController',function($scope,$state){
	
	$scope.changeView = function(view){
		$state.go(view);
	}

});
