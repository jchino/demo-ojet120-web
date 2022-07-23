import Context = require('ojs/ojcontext');
import CoreRouter = require('ojs/ojcorerouter');
import ModuleRouterAdapter = require('ojs/ojmodulerouter-adapter');
import UrlParamAdapter = require('ojs/ojurlparamadapter');
import 'ojs/ojknockout';
import 'ojs/ojmodule-element';

class RootViewModel {
  moduleAdapter: ModuleRouterAdapter;

  constructor() {
    // Navigation Data
    const navData = [
      { path: '', redirect: 'home'},
      { path: 'home' },
      { path: 'chart' },
    ];

    // Setup Router
    const router = new CoreRouter(navData, {
      urlAdapter: new UrlParamAdapter()
    });
    router.sync();
    this.moduleAdapter = new ModuleRouterAdapter(router);

    // Release the application bootstrap busy state
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();
  }
}

export default new RootViewModel();