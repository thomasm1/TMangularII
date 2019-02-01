(function () {
   'use strict';
   angular.module('app')
      .controller('registerController',
      [registerController]);

   function registerController() {
      var vm = this;
      vm.activate = activate;
      vm.rChosen = false;

      activate();

      function activate(){
         vm.rOptions = {
            dataSource: {
               data: [
                  {name: "Login", id: 1},
                  {name: "Register", id: 2},
                  {name: "Verify Token", id: 3}
               ]
            },
            dataTextField: "name",
            dataValueField: "id",
            optionLabel: "Login Options"
         };

         vm.rChange = function(e){
            console.log(e.sender.text())
            vm.rChosen = true;
            if (e.sender.text() == "Login Options"){
               vm.rChosen = false;
            }
         }
      }

   }



})();