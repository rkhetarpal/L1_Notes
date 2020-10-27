var app = angular.module('app', []);
app.controller('NotesController', function ($scope, $http) {
	
    $scope.defaultColor='white';
    $scope.labels=[
        {"labelValue":"Label 1"},
        {"labelValue":"Label 2"},
        {"labelValue":"Label 3"}
    ];
    $scope.initializeLabel = function(){
        if($scope.addLabel){
            
        }
    };
    $scope.addLabel = function(){
        $scope.labelAddition=true;
    };
    
    $scope.removeLabel = function(labelValue){
        let index = _.find($scope.labels,function(o){return o.labelValue === labelValue;})
        $scope.labels.splice(index,1);
    }
});