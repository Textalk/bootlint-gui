var disabledIds = []; // Disable reporting of errors and warnings here

// Append the GUI to the document
var gui = document.createElement('div');
gui.innerHTML = '' +
  '<div class="bootlint">' +
  '  <div class="bootlint-heading">' +
  '    <p class="bootlint-heading-text">' +
  '      bootlint' +
  '      <i id="bootlint-indicator" class="fa fa-warning"></i>' +
  '    </p>' +
  '  </div>' +
  '  <div class="bootlint-body">' +
  '    <div id="bootlint-problems">' +
  '    </div>' +
  '  </div>' +
  '</div>';
document.body.appendChild(gui);
var htmlProblemsList = document.getElementById('bootlint-problems');
var errorIndicatorElement = document.getElementById('bootlint-indicator');
errorIndicatorElement.style.display = 'none';

var reporter = function(problem) {
  errorIndicatorElement.style.display = 'inline-block';
  htmlProblemsList.innerHTML += '' +
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
  htmlProblemsList.innerHTML = '';
  errorIndicatorElement.style.display = 'none';
  bootlint.lintCurrentDocument(reporter, disabledIds);
};

lint();
setInterval(lint, 3000);
