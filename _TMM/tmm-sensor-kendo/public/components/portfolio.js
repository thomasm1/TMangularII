angular.module('app').component('portfolio', {
  templateUrl:  'views/portfolio.html',
  controller: 'portfolioController', function () {
    portfolioController.greeting = 'About TMM';
    
 
    portfolioController.toggleAbout = function() {
      portfolioController.greeting = (portfolioController.greeting == 'About TMM') ? 'Our Daily Tech Post' :  'TMM';
    };
  }
});
 