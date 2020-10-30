var app = angular.module('app', []);
app.controller('NotesController', function ($scope, $http) {
	
	$scope.menuOpened = true;
	$scope.newNote = false;
	$scope.addToDo = false;
	$scope.addRow=1;
	
	$scope.noteList=[];
	
	$scope.numberOfNotes = $scope.noteList.length;
	
	$scope.addNote = function(){
		$scope.menuOpened=false;
		$scope.newNote=true;
	};
	
	$scope.goBack = function(){
		$scope.menuOpened=true;
	}
	
	$scope.addtodoitem = function(){
		$scope.addToDo = true;
		$scope.addRow = $scope.addRow+1;
	}
	
	$scope.removetodoitem = function(){
		$scope.addRow = $scope.addRow - 1;
		
	};
	
	$scope.saveNote = function(noteTitleValue,noteDescrValue){
		$scope.note={};
		$scope.note.noteTitle = noteTitleValue;
		$scope.note.noteDescription = noteDescrValue;
		$scope.noteList.push($scope.note);
		$scope.menuOpened=true;
		$scope.numberOfNotes += 1; 
	}
	
});