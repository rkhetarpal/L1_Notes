var app = angular.module('app', []);
app.controller('NotesController', function ($scope, $http) {
	
    $scope.defaultColor='white';
	$scope.menuOpened=false;
	$scope.noteAdd=false;
    $scope.labels=[
        {"labelValue":"Label 1"},
        {"labelValue":"Label 2"},
        {"labelValue":"Label 3"}
    ];
	
	$scope.utilityButtons = [
	{'utilityName':'Add Note'},
	{'utilityName':'Search Note'},
	{'utilityName':'Close'}
	];
	
	$scope.notes=[];
	
	$scope.openMenu = function(){
		$scope.menuOpened=true;
	};
	
	$scope.closeMenu = function(){
		$scope.menuOpened=false;
	}
	
	$scope.addNewNote = function(){
		$scope.noteAdd=true;
		$scope.menuOpened=false;
	};
	
    $scope.removeLabel = function(labelValue){
        let index = _.find($scope.labels,function(o){return o.labelValue === labelValue;})
        $scope.labels.splice(index,1);
    }
});