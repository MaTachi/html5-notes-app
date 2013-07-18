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

* [AngularJS](http://www.angularjs.org/) licensed under the [MIT
  License](https://docs-angularjs-org-dev.appspot.com/misc/contribute#!)
* [Twitter Bootstrap](http://twitter.github.io/bootstrap/) licensed under
  [Apache License 2.0](http://twitter.github.io/bootstrap/)
* Twitter Bootstrap depends on [jQuery](http://jquery.com/) licensed under the
  [MIT license](https://jquery.org/license/)

## Icons

* [Glyphicons Free](http://glyphicons.com/) licensed under [Creative Commons
  Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/deed.en)
