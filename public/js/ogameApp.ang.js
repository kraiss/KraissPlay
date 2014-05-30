angular
.module('ogameApp', [])
.controller('ogameCtrl', function ($scope) {

    $scope.player =
        [
            {name:"Spartan S117",
                id:"SpartanS117", infuza:"4016703",
                rank:154, holliday:true,
                fleet: {
                    size: 327, rank:50,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                }
            },

            {name:"Rasen",
                id:"Rasen", infuza:"4016631",
                rank:101, holliday:false,
                fleet: {
                    size: 205, rank:76,
                    small:1033, large:893, recycler:390,
                    light:4854, heavy:868, cruiser:903,
                    battleship:750, destroyer:91,
                    bomber:80, traqueur:358
                }
            },

            {name:"SpartaGlobus",
                id:"SpartaGlobus", infuza:"3862614",
                rank:180, holliday:false,
                fleet: {
                    size: 196, rank:78,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                }
            },

            {name:"ExO_Dus",
                id:"ExO_Dus", infuza:"3963983",
                rank:216, holliday:false,
                fleet: {
                    size: 107, rank:136,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                }
            },

            {name:"Thel Vadamee",
                id:"Thel Vadamee", infuza:"3964184",
                rank:271, holliday:false,
                fleet: {
                    size: 115, rank:129,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                }
            },

            {name:"kevv",
                id:"kevv", infuza:"4165945",
                rank:432, holliday:false,
                fleet: {
                    size: 84, rank:169,
                    small:1300, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:4, destroyer:0,
                    bomber:0, traqueur:0
                }
            },

            {name:"Furious Biker",
                id:"Furious Biker", infuza:"3588159",
                rank:0, holliday:false,
                fleet: {
                    size: 0, rank:0,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                }
            },

            {name:"Ashtoonet",
                id:"Ashtoonet", infuza:"3731479",
                rank:0, holliday:false,
                fleet: {
                    size: 0, rank:0,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                }
            },

            {name:"Etwhal",
                id:"Etwhal", infuza:"3589263",
                rank:0, holliday:false,
                fleet: {
                    size: 0, rank:0,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                }
            },

            {name:"bonux44",
                id:"bonux44", infuza:"4135990",
                rank:0, holliday:false,
                fleet: {
                    size: 0, rank:0,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                }
            },

            {name:"S00999",
                id:"S00999", infuza:"3753152",
                rank:0, holliday:false,
                fleet: {
                    size: 0, rank:0,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                }
            }
        ];

    var indexShow;
    for (indexShow = 0; indexShow < $scope.player.length; indexShow++) {
        $scope.player[indexShow].showDetail = false;
    }

    $scope.upDownIcon = function(index) {
        return $scope.player[index].showDetail ? 'updown-up' : 'updown-down';
    }

    $scope.switchDetail = function(index) {
        if ($scope.player[index].showDetail)
            $scope.player[index].showDetail = false;
        else
            $scope.player[index].showDetail = true;
    }
});