angular.module('myApp').controller('homeCtrl', ['$routeParams', '$scope', function($routeParams, $scope){
 
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
                   ];
  
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
                  ];
  
  $scope.filter = 'all';
   $scope.items = [{
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap1.jpg",
    type : "all"    
  },
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob1.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth1.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Book",
    image : "img/portfolio/book1.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Food",
    image : "img/portfolio/food1.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap2.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob2.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth2.jpg",
    type : "all"        
   },
      
                 {
    title : "Project Title",
    category : "Book",
    image : "img/portfolio/book2.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Food",
    image : "img/portfolio/food2.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap3.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap4.jpg",
    type : "all"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap1.jpg",
    type : "laptop"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap2.jpg",
    type : "laptop"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap2.jpg",
     type : "laptop"                 
    
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap3.jpg",
     type : "laptop"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap4.jpg",
     type : "laptop"  
           
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap5.jpg",
    type : "laptop"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap6.jpg",
     type : "laptop"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap7.jpg",
     type : "laptop"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap8.jpg",
    type : "laptop"  
  },
                  
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap9.jpg",
    type : "laptop"  
  },
      
                 {
    title : "Project Title",
    category : "Laptop",
    image : "img/portfolio/lap10.jpg",
    type : "laptop"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob1.jpg",
    type : "mobile"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob2.jpg",
    type : "mobile"  
  },
                  
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob3.jpg",
    type : "mobile"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob4.jpg",
    type : "mobile"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob5.jpg",
    type : "mobile"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob5.jpg",
    type : "mobile"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob6.jpg",
    type : "mobile"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob7.jpg",
    type : "mobile"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob8.jpg",
    type : "mobile"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob9.jpg",
    type : "mobile"  
  },
      
                 {
    title : "Project Title",
    category : "Mobile Phone",
    image : "img/portfolio/mob10.jpg",
    type : "mobile"  
  }, 
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth2.jpg",
    type : "fashion"  
  },              
                  {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth3.jpg",
    type : "fashion"  
  }, 
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth4.jpg",
    type : "fashion"  
  },   
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth5.jpg",
    type : "fashion"  
  },   
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth6.jpg",
    type : "fashion"  
  },   
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth7.jpg",
    type : "fashion"  
  },   
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth8.jpg",
    type : "fashion"  
  },   
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth9.jpg",
    type : "fashion"  
  },   
                 {
    title : "Project Title",
    category : "Fashion",
    image : "img/portfolio/cloth10.jpg",
    type : "fashion"  
  },  
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food10.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food1.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food2.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food3.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food4.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food5.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food6.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food7.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food2.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food9.jpg",
    type : "food"  
  },    
                     
                 {
    title : "Project Title",
    category : "Foods",
    image : "img/portfolio/food10.jpg",
    type : "food"  
  },      
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book1.jpg",
    type : "book"  
  },        
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book2.jpg",
    type : "book"  
  },        
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book3.jpg",
    type : "book"  
  },        
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book4.jpg",
    type : "book"  
  },        
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book5.jpg",
    type : "book"  
  },        
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book6.jpg",
    type : "book"  
  },        
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book7.jpg",
    type : "book"  
  },        
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book8.jpg",
    type : "book"  
  },        
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book9.jpg",
    type : "book"  
  },        
                     
                 {
    title : "Project Title",
    category : "Books",
    image : "img/portfolio/book10.jpg",
    type : "book"  
  } 
                   ]
  
}])