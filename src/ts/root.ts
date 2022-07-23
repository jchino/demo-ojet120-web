// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as ko from "knockout";
import { whenDocumentReady } from "ojs/ojbootstrap";
import "ojs/ojknockout";
import Context = require("ojs/ojcontext");

// eslint-disable-next-line @typescript-eslint/no-empty-function
function init() {}
    
whenDocumentReady().then(function () {
  // if running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
  // event before executing any code that might interact with Cordova APIs or plugins.
  if (document.body.classList.contains('oj-hybrid')) {
    document.addEventListener('deviceready', init);
  } else {
    init();
  }
  // release the application bootstrap busy state
  Context.getPageContext().getBusyContext().applicationBootstrapComplete();
});