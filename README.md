Bootlint GUI
============

Bootlint GUI will show your [bootlint](https://github.com/twbs/bootlint) messages in a widget in
the browser window instead of hiding them in the console.


Using
-----

Include the bootlint-gui CSS and JavaScript:

    <link href="dist/bootlint-gui.css" rel="stylesheet">
    <script src="dist/bootlint-gui.js"></script>


Contributing
------------

Install [jshint](http://jshint.com/install/) and
[jscs](http://jscs.info/overview.html#friendly-packages) plugins for your editor to make sure you
follow to the code conventions.

Send pull requests to the develop branch; This project uses [git-flow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/).

Install dependencies:

    npm install

Build a new dist:

    gulp build
