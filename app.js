'use strict';
var myApp = angular.module('myApp', ['ngRoute'])
.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider){
$routeProvider
.when('/', {
       templateUrl : 'templates/home.html',
       controller : 'homeCtrl'
      })
  .when('/about-us',{
      templateUrl : 'templates/about.htm',
      controller : 'aboutCtrl'
})
  .when('/services',{
      templateUrl : 'templates/services.html',
      controller : 'servicesCtrl'
})
  .when('/portfolio',{
      templateUrl : 'templates/portfolio.html',
      controller : 'portfolioCtrl'
})
  .when('/team', {
      templateUrl : 'templates/team.html',
      controller : 'teamCtrl'
})
  .when('/contact-us', {
      templateUrl : 'templates/contact.html',
      controller : 'contactCtrl'
})
  .otherwise({redirectTo : '/'});
  $locationProvider.html5Mode(true);
}])
