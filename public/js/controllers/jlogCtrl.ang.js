angular
    .module('jlogApp', [])
    .controller('jlogCtrl', function ($scope) {

        $scope.articles =
            [
                {
                    title: {fr: "Constructeur dynamique" ,en:"Dynamic Constructor"},
                    article: {
                        fr: "C'est un test <a href='#'>link</a>",
                        en :"<html><head></head><body>C'est un test <a href='#'>link</a></body></html>"
                    },
                    image:null
                }
            ];
    });