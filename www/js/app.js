
var app = angular.module('party', ['ionic']);

app.run(function($ionicPlatform,$timeout,$state) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    
    .state('login',{
      url:'/login',
      templateUrl:'templates/login.html',
      controller: 'LoginController'
    })
    .state('timeline',{
      url:'/timeline',
      templateUrl:'templates/timeline.html',
      controller: 'TimelineController'
    })
    .state('createEvent',{
      url:'/createEvent',
      templateUrl:'templates/createEvent.html',
      controller: 'CreateEventController'
    })
    .state('eventDetails',{
      url:'/eventDetails',
      templateUrl:'templates/eventDetails.html',
      controller: 'EventDetailsController'
    })
    .state('settings',{
      url:'/settings',
      templateUrl:'templates/settings.html',
      controller: 'SettingsController'
    })
    .state('myEvents',{
      url:'/myEvents',
      templateUrl:'templates/myEvents.html',
      controller: 'MyEventsController'
    })
    .state('following',{
      url:'/following',
      templateUrl:'templates/following.html',
      controller: 'FollowingController'
    })
    .state('customization',{
      url:'/customization',
      templateUrl:'templates/customization.html',
      controller: 'CustomizationController'
    })
    .state('subscription',{
      url:'/subscription',
      templateUrl:'templates/subscription.html',
      controller: 'SubscriptionController'
    });

    $urlRouterProvider.otherwise('/login');
});

