angular
.module('langApp', [])
.controller('LangCtrl', function ($scope, $http) {

    lang = "";

    getLang = function() {
    $http.get('/lang').success(function(data) {
        lang = data;
    });
    }
    getLang();

    $scope.switchLang = function() {
        $http.put('/lang').success(function(data) {
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