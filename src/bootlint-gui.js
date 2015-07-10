(function(bootlint, document) {
  var disabledIds = []; // Disable reporting of errors and warnings here

  var addClass = function(element, className) {
    var classNames = {};
    classNames[className] = true;
    element.className.split(' ').forEach(function(className) {
      classNames[className] = true;
    });
    element.className = Object.keys(classNames).join(' ');
  };

  var removeClass = function(element, className) {
    var classNames = {};
    element.className.split(' ').forEach(function(className) {
      classNames[className] = true;
    });

    delete classNames[className];
    element.className = Object.keys(classNames).join(' ');
  };

  var toggleClass = function(element, className) {
    var classFound = false;
    element.className.split(' ').forEach(function(currentClass) {
      if (currentClass === className) {
        classFound = true;
      }
    });

    if (classFound) {
      removeClass(element, className);
    } else {
      addClass(element, className);
    }
  };

  // Append the GUI to the document
  var div = document.createElement('div');
  div.innerHTML = '' +
    '<div class="bootlint" id="bootlintGui">' +
    '  <a tabindex="0" class="bootlint-heading" id="bootlintTab">' +
    '    bootlint' +
    '    <i id="bootlintIndicator" class="fa fa-warning"></i>' +
    '  </a>' +
    '  <div class="bootlint-body">' +
    '    <div id="bootlintProblems">' +
    '    </div>' +
    '  </div>' +
    '</div>';
  document.body.appendChild(div);

  var bootlintProblems = document.getElementById('bootlintProblems');
  var bootlintGui = document.getElementById('bootlintGui');
  var problemIndicator = document.getElementById('bootlintIndicator');
  var bootlintTab = document.getElementById('bootlintTab');
  bootlintTab.addEventListener('click', function() {
    toggleClass(bootlintGui, 'open');
  });
  problemIndicator.style.display = 'none';

  var reporter = function(problem) {
    problemIndicator.style.display = 'inline-block';
    bootlintProblems.innerHTML += '' +
      '<p>' +
      '  <a href="https://github.com/twbs/bootlint/wiki/' + problem.id + '" target="_blank">' +
      '    <code>' + problem.id + '</code>' +
      '  </a>' +
      '  ' + problem.message +
      '  <a href="https://github.com/twbs/bootlint/wiki/' + problem.id + '" target="_blank" ' +
      'title="Read more about this message in the Wiki">' +
      '    more&nbsp;<i class="fa fa-external-link"></i>' +
      '  </a>' +
      '</p>';
  };

  var lint = function() {
    bootlintProblems.innerHTML = '';
    problemIndicator.style.display = 'none';
    bootlint.lintCurrentDocument(reporter, disabledIds);
  };

  lint();
  setInterval(lint, 3000);
})(bootlint, document);
