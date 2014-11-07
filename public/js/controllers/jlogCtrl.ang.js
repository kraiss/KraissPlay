angular
    .module('jlogApp', [])
    .controller('jlogCtrl', ['$http', '$scope', '$sce', function($http, $scope, $sce) {

        var articlesURL = 'http://' + window.document.URL.split('/')[2] + '/jlog/articles ';

        // JLog articles
        $scope.articles = [];

        $http.get(articlesURL)
            .success(function(data, status, headers, config) {
                $scope.articles = data;
                angular.forEach($scope.articles, function(article) {
                    article.textFr = $sce.trustAsHtml(article.textFr);
                    article.textEn = $sce.trustAsHtml(article.textEn);
                });
            })
            .error(function(data, status, headers, config) {
                $scope.articles = [];
            });
    }]);