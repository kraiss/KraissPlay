angular
.module('ogameApp', [])
.controller('ogameCtrl', function ($scope) {

    $scope.player =
        [
            {name:"Spartan S117",
                id:"SpartanS117", infuza:"4016703"
            },

            {name:"Rasen",
                id:"Rasen", infuza:"4016631", infoSupp:true,
                fleet: {
                    small:1033,
                    large:893,
                    light:4854,
                    heavy:868,
                    cruiser:903,
                    battleship:750,
                    recycler:390,
                    bomber:80,
                    destroyer:91,
                    traqueur:358
                }
            },

            {name:"SpartaGlobus",
                id:"SpartaGlobus", infuza:"3862614"
            },

            {name:"ExO_Dus",
                id:"ExO_Dus", infuza:"3963983"
            },

            {name:"Thel Vadamee",
                id:"Thel Vadamee", infuza:"3964184"
            },

            {name:"kevv",
                id:"kevv", infuza:"4165945"
            },

            {name:"Furious Biker",
                id:"Furious Biker", infuza:"3588159"
            },

            {name:"Ashtoonet",
                id:"Ashtoonet", infuza:"3731479"
            },

            {name:"Etwhal",
                id:"Etwhal", infuza:"3589263"
            },

            {name:"bonux44",
                id:"bonux44", infuza:"4135990"
            },

            {name:"S00999",
                id:"S00999", infuza:"3753152"
            }
        ];

    var indexShow;
    for (indexShow = 0; indexShow < $scope.player.length; indexShow++) {
        $scope.player[indexShow].showDetail = false;
    }

    $scope.showDetail = function(id) {
        var index;
        for (index = 0; index < $scope.player.length; index++) {
            if(id == $scope.player[index].id) {
                $scope.player[index].showDetail = true;
            }
        }
    }

    $scope.hideDetail = function(id) {
        var index;
        for (index = 0; index < $scope.player.length; index++) {
            if(id == $scope.player[index].id) {
                $scope.player[index].showDetail = false;
            }
        }
    }
});