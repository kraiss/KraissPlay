var langApp = angular.module('langApp', []);
 
langApp.controller('LangCtrl', function ($scope, $http) {
  lang = "";
  
  getLang = function() {
	$http.get('/lang/get').success(function(data) {
		lang = data;
	});
  }
  getLang();
  
  $scope.changeLang = function() {
	$http.get('/lang/switch').success(function(data) {
		lang = data;
	});
  }
  
  $scope.showFR = function() {
      if (lang === 'fr') {
          return true;
      } else {
          return false;
      }
  }
  
  $scope.showEN = function() {
      if (lang === 'en') {
          return true;
      } else {
          return false;
      }
  }
});