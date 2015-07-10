Bootlint GUI
============

Bootlint GUI will show your [Bootlint](https://github.com/twbs/bootlint) messages in a widget in
the browser window instead of hiding them in the console.

    npm install bootlint-gui

Use
---

Include the Bootlint GUI CSS and JavaScript:

    <link href="dist/bootlint-gui.css" rel="stylesheet">
    <script src="dist/bootlint-gui.js"></script>


Developt/Contribute
------------

Install [JSHint](http://jshint.com/install/) and
[JSCS](http://jscs.info/overview.html#friendly-packages) plugins for your editor to make sure you
follow to the code conventions.

Send pull requests to the develop branch; This project uses [git-flow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/).

Install dependencies:

    npm install

Build a new dist:

    gulp build
