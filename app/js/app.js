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

angular.module('notesApp', ['noteFilters', 'noteServices']).
    config(function ($routeProvider) {
  $routeProvider
    .when('/home',
      {
        id: 1,
        templateUrl: 'partials/home.html'
      })
    .when('/notes',
      {
        id: 2,
        controller: 'NoteListController',
        templateUrl: 'partials/note-list.html'
      })
    .when('/notes/new',
      {
        id: 3,
        controller: 'NoteNewController',
        templateUrl: 'partials/note-new.html'
      })
    .when('/notes/:noteId',
      {
        id: 4,
        controller: 'NoteDetailController',
        templateUrl: 'partials/note-detail.html'
      })
    .otherwise({ redirectTo: '/home' });
});
