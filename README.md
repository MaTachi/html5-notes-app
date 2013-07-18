# HTML5 Notes App

Copyright (C) 2013 Daniel Jonsson  
Licensed under [GNU GPL version 3 or later](LICENSE)

## Access app

Try it out on
[https://matachi.github.io/html5-notes-app](https://matachi.github.io/html5-notes-app)

## Run tests

Prerequisites:

    $ yaourt -S nodejs
    $ npm install -g karma

Unit tests:

    $ karma start config/karma.conf.js

End-to-end tests:

    $ ./scripts/web_server.js
    $ karma start config/karma-e2e.conf.js

## Libraries

* AngularJS licensed under the [MIT
  license](https://docs-angularjs-org-dev.appspot.com/misc/contribute#!)
* Twitter Bootstrap licensed under [Apache License
  2.0](http://twitter.github.io/bootstrap/)
