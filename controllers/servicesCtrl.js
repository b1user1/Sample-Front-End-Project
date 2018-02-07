angular.module('myApp').controller('servicesCtrl', ['$routeParams','$scope', function($routeParams,$scope){

  $scope.services =[{
    name : "Web Design",
    image : "fa fa-desktop",
    discription : "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
  },
                   {
    name : "App Development",
    image : "fa fa-gears",
    discription : "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
  },
                   {
    name : "Branding",
    image : "fa fa-rocket",
    discription : "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
  },
                    {
    name : "Marketing",
    image : "fa fa-line-chart",
    discription : "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
  }
                   ]
}])