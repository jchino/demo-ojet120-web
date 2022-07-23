import Context = require('ojs/ojcontext');
import CoreRouter = require('ojs/ojcorerouter');
import KnockoutRouterAdapter = require('ojs/ojknockoutrouteradapter');
import ModuleRouterAdapter = require('ojs/ojmodulerouter-adapter');
import UrlParamAdapter = require('ojs/ojurlparamadapter');
import 'ojs/ojknockout';
import 'ojs/ojmodule-element';

interface CoreRouterDetail {
  label: string;
}

class RootViewModel {
  moduleAdapter: ModuleRouterAdapter<CoreRouterDetail>;
  selection: KnockoutRouterAdapter<CoreRouterDetail>;

  constructor() {
    // Navigation Data
    const navData = [
      { path: '', redirect: 'home'},
      { path: 'home', detail: { label: 'Home' }},
    ];

    // Setup Router
    const router = new CoreRouter(navData, {
      urlAdapter: new UrlParamAdapter()
    });
    router.sync();
    this.moduleAdapter = new ModuleRouterAdapter(router);
    this.selection = new KnockoutRouterAdapter(router);

    // Release the application bootstrap busy state
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();
  }
}

export default new RootViewModel();