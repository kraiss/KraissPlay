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
                },
                tech: {
                    weapon:0,
                    shield:0,
                    shell :0
                }
            },

            {name:"Rasen",
                id:"Rasen", infuza:"4016631",
                rank:101, holliday:false,
                fleet: {
                    size: 211, rank:76,
                    small:1033, large:893, recycler:390,
                    light:5044, heavy:868, cruiser:903,
                    battleship:750, destroyer:91,
                    bomber:80, traqueur:358
                },
                tech: {
                    weapon:14,
                    shield:12,
                    shell :14
                }
            },

            {name:"SpartaGlobus",
                id:"SpartaGlobus", infuza:"3862614",
                rank:180, holliday:false,
                fleet: {
                    size: 196, rank:78,
                    small:417, large:188, recycler:383,
                    light:3213, heavy:90, cruiser:176,
                    battleship:1403, destroyer:231,
                    bomber:104, traqueur:344
                },
                tech: {
                    weapon:0,
                    shield:0,
                    shell :0
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
                },
                tech: {
                    weapon:13,
                    shield:12,
                    shell :13
                }
            },

            {name:"ExO_Dus",
                id:"ExO_Dus", infuza:"3963983",
                rank:216, holliday:false,
                fleet: {
                    size: 110, rank:136,
                    small:2146, large:190, recycler:108,
                    light:1406, heavy:197, cruiser:416,
                    battleship:468, destroyer:83,
                    bomber:165, traqueur:160
                },
                tech: {
                   weapon:0,
                   shield:0,
                   shell :0
                }
            },

            {name:"kevv",
                id:"kevv", infuza:"4165945",
                rank:432, holliday:false,
                fleet: {
                    size: 86, rank:169,
                    small:1300, large:0, recycler:0,
                    light:472, heavy:0, cruiser:121,
                    battleship:4, destroyer:0,
                    bomber:0, traqueur:0
                },
                tech: {
                    weapon:12,
                    shield:10,
                    shell :12
                }
            },

            {name:"bonux44",
                id:"bonux44", infuza:"4135990",
                rank:210, holliday:false,
                fleet: {
                    size: 55, rank:233,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                },
                tech: {
                    weapon:0,
                    shield:0,
                    shell :0
                }
            },

            {name:"Ashtoonet",
                id:"Ashtoonet", infuza:"3731479",
                rank:432, holliday:false,
                fleet: {
                    size: 54, rank:243,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                },
                tech: {
                    weapon:0,
                    shield:0,
                    shell :0
                }
            },

            {name:"S00999",
                id:"S00999", infuza:"3753152",
                rank:395, holliday:false,
                fleet: {
                    size: 47, rank:286,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                },
                tech: {
                    weapon:8,
                    shield:8,
                    shell :10
                }
            },

            {name:"Furious Biker",
                id:"Furious Biker", infuza:"3588159",
                rank:149, holliday:false,
                fleet: {
                    size: 44, rank:306,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                },
                tech: {
                    weapon:0,
                    shield:0,
                    shell :0
                }
            },

            {name:"Etwhal",
                id:"Etwhal", infuza:"3589263",
                rank:95, holliday:false,
                fleet: {
                    size: 39, rank:0,
                    small:0, large:0, recycler:0,
                    light:0, heavy:0, cruiser:0,
                    battleship:0, destroyer:0,
                    bomber:0, traqueur:0
                },
                tech: {
                    weapon:0,
                    shield:0,
                    shell :0
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