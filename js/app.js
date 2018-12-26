var C1 = angular.module('C1',[]);

C1.controller('C1Controller',function($scope){
    $scope.message="Akram Message";
    
    $scope.colors=[
        {
            name:"Akram",
            color:"Blue",
            rate : 50
        },
        {
            name:"Koee",
            color:"Green",
            rate : 100
        },
        {
            name:"Osama",
            color:"Red",
            rate : 30
        },
        {
            name:"Ahmed",
            color:"Cyan",
            rate : 40
        }
    ];
});

