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

describe('services', function() {
  var noteService;

  beforeEach(module('noteServices'));

  describe('Note', function() {
    var Note;

    beforeEach(inject(function(_Note_) {
      Note = _Note_;
      Note.resetNotes();
    }));

    it('contains 5 default items', function() {
      expect(Note.getNotes().length).toEqual(5);
    });

    it('working get method', function() {
      expect(Note.getNote(4).id).toEqual(4);
      expect(Note.getNote(1).id).toEqual(1);
      expect(Note.getNote(6)).toBeUndefined();
    });

    it('possible to insert new notes', function() {
      expect(Note.getNotes().length).toEqual(5);
      Note.insertNote('a', 'b', ['c', 'd'], 2);
      expect(Note.getNotes().length).toEqual(6);
      Note.insertNote('a', 'b', ['c', 'd'], 2);
      expect(Note.getNotes().length).toEqual(7);
    });

    it('possible to delete notes', function() {
      expect(Note.getNotes().length).toEqual(5);
      Note.deleteNote(5);
      expect(Note.getNotes().length).toEqual(4);
      Note.deleteNote(4);
      expect(Note.getNotes().length).toEqual(3);

      expect(Note.getNotes()[0].id).toEqual(1);
      expect(Note.getNotes()[1].id).toEqual(2);
      expect(Note.getNotes()[2].id).toEqual(3);
    });

  });

});
