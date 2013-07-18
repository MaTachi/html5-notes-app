// Copyright (C) 2013 Daniel Jonsson
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

'use strict';

function NoteListController($scope, Note) {
  $scope.notes = Note.getNotes();
  $scope.orderProp = 'date';

  $scope.deleteNote = function(id) {
    Note.deleteNote(id);
  }

  $scope.resetNotes =  function() {
    Note.resetNotes();
    $scope.notes = Note.getNotes();
  }
}

function NoteNewController($scope, $location, Note) {
  $scope.newNote = {level: 1};

  $scope.insertNote = function() {
    var subject = $scope.newNote.subject;
    var content = $scope.newNote.content;
    var level = parseInt($scope.newNote.level);
    var tags;
    if (typeof $scope.newNote.tags === 'undefined' ||
        $scope.newNote.tags == '') {
      tags = [];
    } else {
      tags = $scope.newNote.tags.split(',');
    }
    Note.insertNote(subject, content, tags, level);
    $location.path('/notes');
  }
}

function NoteDetailController($scope, $routeParams, Note) {
  $scope.note = Note.getNote($routeParams.noteId);
}

function NavbarController($scope, $route) {
  $scope.getActive = function(id) {
    return id == $route.current.id;
  }
}
