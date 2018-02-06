angular.module('myApp').controller('teamCtrl', ['$routeParams','$scope', function($routeParams,$scope){
   $scope.members =[{
    
    name : "John Doe",
    image : "img/team/01.jpg",
    post : " Founder / CO ",
    discription : "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    
  },{
    
    name : "Mike Doe",
    image : "img/team/02.jpg",
    post : " Web Designer ",
    discription : "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    
  },{
    
    name : "Jana Doe",
    image : "img/team/03.jpg",
    post : " Creative Director ",
    discription : "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    
  },{
    
    name : "Larry Show",
    image : "img/team/04.jpg",
    post : " Project Manager ",
    discription : "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    
  }
                  ]
  


}])