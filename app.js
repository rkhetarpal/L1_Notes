var app = angular.module('app', []);
app.controller('NotesController', function ($scope, $http) {
	
	$scope.menuOpened = true;
	$scope.newNote = false;
	$scope.addToDo = false;
	$scope.addRow=1;
    $scope.fullNote = false;
    $scope.editingNote = false;
    $scope.noteItemNumber = 0;
	
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
    
    $scope.removenoteitem = function(noteItemNumber){
        var index = $scope.noteList.indexOf(_.find($scope.noteList,function(o){return o.noteSerial == noteItemNumber;}));
        $scope.noteList.splice(index,1);
        $scope.numberOfNotes = $scope.noteList.length;
    };
	
	$scope.saveNote = function(noteTitleValue,noteDescrValue){
        if(!$scope.editingNote){
            $scope.note={};
            $scope.note.noteSerial=$scope.numberOfNotes;
            $scope.note.noteTitle = noteTitleValue;
            $scope.note.noteDescription = noteDescrValue;
            $scope.noteList.push($scope.note);
            $scope.numberOfNotes += 1;
            $scope.note={};
        }
        else{
           $scope.note = _.find($scope.noteList,function(o){return o.noteSerial == $scope.noteItemNumber;});
           $scope.note.noteTitle = noteTitleValue;
           $scope.noteDescription = noteDescrValue;
           $scope.numberOfNotes = $scope.noteList.length;
           $scope.note={};
        }
		$scope.menuOpened=true;
	};
    
    
    $scope.viewFullNote = function(noteItemNumber){
        if(!$scope.fullNote) $scope.fullNote = true;
        else $scope.fullNote = false;
        $scope.note = _.find($scope.noteList,function(o){return o.noteSerial == noteItemNumber;});
        return $scope.note;
    };
    
    $scope.editNote = function(noteItemNumber){
        $scope.note = _.find($scope.noteList,function(o){return o.noteSerial == noteItemNumber;});
        $scope.noteTitleValue = $scope.note.noteTitle;
        $scope.noteDescrValue = $scope.note.noteDescription;
        $scope.editingNote=true;
        $scope.noteItemNumber = noteItemNumber;
        $scope.addNote();
    };
	
});