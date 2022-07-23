import * as ko from 'knockout';
import { whenDocumentReady } from 'ojs/ojbootstrap';
import rootViewModel from './appController';

function init(): void {
  ko.applyBindings(rootViewModel, document.getElementById('pageContent'));
}

whenDocumentReady().then(function () {
  if (document.body.classList.contains('oj-hybrid')) {
    document.addEventListener('deviceready', init);
  }
  else {
    init();
  }
});