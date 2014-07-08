angular
    .module('jlogApp', [])
    .controller('jlogCtrl', function ($scope) {

        $scope.articles =
            [
                {
                    title: {fr: "Constructeur dynamique" ,en:"Dynamic Constructor"},
                    article: {
                        fr: "C'est un test",
                        en :"this is a test"
                    },
                    image:null
                }
            ];



    });