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

angular.module('noteServices', []).factory('Note', function() {
  var service = {}, defaultNotes;

  defaultNotes = [
    {
      id: 1,
      subject: "Remember to eat!",
      content: "You have to eat, remember that my friend.",
      date: new Date(2013, 6, 14, 13, 37),
      tags: ['food'],
      level: 4
    },
    {
      id: 2,
      subject: "Food in fridge",
      content: "I hope you remember that there is food in the fridge. :)",
      date: new Date(2013, 6, 15, 10, 13, 37),
      tags: ['food', 'fridge'],
      level: 1
    },
    {
      id: 3,
      subject: "Pizza = h4ck3r f00d",
      content: "Pizza is made for hackers.",
      date: new Date(2013, 6, 16, 10, 13, 37),
      tags: ['pizza', 'hacker', 'food'],
      level: 2
    },
    {
      id: 4,
      subject: "I'm starving",
      content: "I wish I didn't eat ALL food that we had in the fridge.",
      date: new Date(2013, 6, 17),
      tags: [],
      level: 3
    },
    {
      id: 5,
      subject: "Why eat..?",
      content: "I have started to wonder, why do we need food...?",
      date: new Date(2013, 6, 18),
      tags: ['life', 'questions'],
      level: 1
    }
  ];

  function checkLocalStorageSupport() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }

  function updateLocalNotes() {
    if (checkLocalStorageSupport) {
      window.localStorage.setItem('notes', JSON.stringify(service.notes));
      window.localStorage.setItem('notesLength', JSON.stringify(service.length));
    }
  }

  function initNotes(context) {
    if (checkLocalStorageSupport) {
      var notes = window.localStorage.getItem('notes');
      var notesLength = window.localStorage.getItem('notesLength');
      if (notes != null) {
        context.notes = JSON.parse(notes);
        context.length = JSON.parse(notesLength);
      } else {
        context.notes = defaultNotes.slice(0);
        context.length = context.notes.length;
      }
    } else {
      context.notes = defaultNotes.slice(0);
      context.length = context.notes.length;
    }
  }

  service.getNotes = function() {
    return this.notes;
  };

  service.getNote = function(id) {
    for (var i = 0; i < this.notes.length; ++i) {
      if (this.notes[i].id == id) {
        return this.notes[i];
      }
    }
    return undefined;
  }

  service.insertNote = function(subject, content, tags, level) {
    this.length += 1;
    var id = this.length;
    this.notes.push({
      id: id,
      subject: subject,
      content: content,
      date: new Date(),
      tags: tags,
      level: level
    });
    updateLocalNotes();
  };

  service.deleteNote = function(id) {
    for (var i = 0; i < this.notes.length; ++i) {
      if (this.notes[i].id == id) {
        this.notes.splice(i, 1);
        break;
      }
    }
    updateLocalNotes();
  };

  service.resetNotes = function() {
    window.localStorage.clear();
    initNotes(this);
  }

  initNotes(service);

  return service;
});
