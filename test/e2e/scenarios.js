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

describe('Notes App', function() {

  it('should redirect index.html to index.html#/home', function() {
    browser().navigateTo('../../app/index.html');
    expect(browser().location().url()).toBe('/home');
  });

  describe('Notes list view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/notes');
      element('.reset-button').click();
    });

    it('should filter the notes list as user types into the search box', function() {
      expect(repeater('.notes tr').count()).toBe(5);

      input('query').enter('Remember to eat!');
      expect(repeater('.notes tr').count()).toBe(1);

      input('query').enter('eat');
      expect(repeater('.notes tr').count()).toBe(3);
    });

    it('should be possible to control note list order via the drop down select box', function() {
      expect(repeater('.notes tr', 'Note list').column('note.subject')).
          toEqual(["Remember to eat!","Food in fridge","Pizza = h4ck3r f00d","I'm starving","Why eat..?"]);

      select('orderProp').option('Alphabetical');
      expect(repeater('.notes tr', 'Note list').column('note.subject')).
          toEqual(["Food in fridge","I'm starving","Pizza = h4ck3r f00d","Remember to eat!","Why eat..?"]);

      select('orderProp').option('Importance level');
      expect(repeater('.notes tr', 'Note list').column('note.subject')).
          toEqual(["Food in fridge","Why eat..?","Pizza = h4ck3r f00d","I'm starving","Remember to eat!"]);
    });

    it('should render note specific links', function() {
      input('query').enter('starving');
      element('.notes td a').click();
      expect(browser().location().url()).toBe('/notes/4');
    });

    it('should be possible to remove notes', function() {
      expect(repeater('.notes tr').count()).toBe(5);

      element('.notes tr:nth-child(4) td button').click();
      expect(repeater('.notes tr', 'Note list').column('note.id')).
          toEqual(["1","2","3","5"]);

      element('.notes tr:nth-child(2) td button').click();
      expect(repeater('.notes tr', 'Note list').column('note.id')).
          toEqual(["1","3","5"]);

      element('.notes tr:nth-child(3) td button').click();
      expect(repeater('.notes tr', 'Note list').column('note.id')).
          toEqual(["1","3"]);
    });

    it('should reset list after clicking "Clear local cache" button', function() {
      expect(repeater('.notes tr').count()).toBe(5);
      element('.notes tr:nth-child(1) td button').click();
      expect(repeater('.notes tr').count()).toBe(4);
      element('.reset-button').click();
      expect(repeater('.notes tr').count()).toBe(5);
    });
  });

  describe('Notes detail view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/notes/3');
    });

    it('should show information about a note', function() {
      expect(element('.title').html()).toBe('Pizza = h4ck3r f00d');
      expect(element('.content').html()).toBe('Pizza is made for hackers.');
    });

  });

  describe('Notes new view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/notes/new');
    });

    it('should be possible to create a new note', function() {
      input('newNote.subject').enter('a');
      input('newNote.content').enter('b');
      element('button').click();
      expect(browser().location().url()).toBe('/notes');
      expect(repeater('.notes tr').count()).toBe(6);
      expect(repeater('.notes tr', 'Note list').column('note.id')).
          toEqual(["1","2","3","4","5","6"]);
    });

  });

});
