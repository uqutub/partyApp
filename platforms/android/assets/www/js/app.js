
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
    });

    $urlRouterProvider.otherwise('/timeline');
});

