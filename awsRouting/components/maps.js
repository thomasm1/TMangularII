angular.module('tmm').component('maps', {
  bindings: { maps: '<' },  
  templateUrl:  'views/maps.html',
  controller: 'mapsController',
  controllerAs: 'mapsCtrl', function() {
 
    // mapsCtrl.xMaps = function(mapsList, $state, $location) {
    //   if (mapsCtrl.id)
    //   $location.url("/xMaps/" + mapsCtrl.id)
    //   else 
    //   $location.url("/xMaps")
    // }
    // mapsCtrl.reloadData = function () {
    //   $state.reload();
    // }
    // mapsCtrl.maps = mapsList;


    mapsCtrl.toggleGreeting = function() {
      mapsCtrl.greeting = (mapsCtrl.greeting == 'TMM MAPS') ? 'MAPS' :  'TMM';
    };
  }


  // ,
  // resolve: {
  //   map: function (mapsService, $transition) {
  //     return mapsService.getMap($transition.params().mapId);
  //   }
  // }


});
 
 