angular
.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('MyController', ['$scope', 'postService','$window', '$location', function ($scope, postService, $window, $location) {

    $scope.applyEnabled = false;
    $scope.secondaryUrl = "";
  
    $scope.businessTypeList = 'Accounting,Amusement,AutoRepair,Business Services,Catering,ChildCare,ComputerServices,ConsumerGoodsRetailStore,ConsumerGoodsOnlineStore,ConsumerGoodsOnlineAndOffline,Construction,Dentists,DryCleaning,Equipment,FoodService,Grocery,Health,HomeRepair,Hotels,Insurance,Janitorial,Landscape,Optometrists,Physicians,Restaurants,Salons,Taxis,Trucking,Veterinarians';
  
    $scope.user = {
      /*
      Plug initial values here
      */
    };
  
      $scope.businessTypes = ($scope.businessTypeList).
        split(',')
        .map(function(BusinessType){
              return BusinessType;
        });
 
       $scope.apply = function() 
       {  
          console.log($scope.secondaryUrl);
          window.location.href = $scope.secondaryUrl;
       };
  
       $scope.submit = function() 
       {
          var promise = postService.post($scope.user);
          promise.then(function(response){
              if(response.data.Qualified==true)
              {
                  $scope.applyEnabled = true;
                  console.log(response.data.RedirectUrl);
                  $scope.secondaryUrl = response.data.RedirectUrl;
              }
              else
              {
                 $window.alert("You are not eligible for credit");
              }
          }, function(err)
          {
              $window.alert("Your request to the end-point failed with status code " + err.statusText);
          })
       };
 }])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('amber')
    .backgroundPalette('grey')
    .warnPalette('red');
})
.factory('postService', ['$http', function ($http) {
  return {
    post: function(data){
      var config = {
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      var str = [];
      for(var p in data)
        if (data.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        }
      str.push("api_key=vauwg9sbqkrdnzdmr7eyk92t")      
      var qs = str.join("&");
      console.log(qs);
      return $http.post('https://api.kabbage.com/v2/prequalify/', qs , config);
    }
  }
}]);