import * as ko from 'knockout';
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import CoreRouter = require('ojs/ojcorerouter');
import { ojListView } from "ojs/ojlistview";
import 'ojs/ojavatar';
import 'ojs/ojknockout';
import 'ojs/ojlistitemlayout';
import 'ojs/ojlistview';

interface Page {
  pageId: string;
  pageName: string;
  description: string;
  category: string;
}

class HomeViewModel {
  // Init List Data
  private readonly pageData = [
    {
      pageId: 'chart',
      pageName: 'チャート',
      description: 'oj-chart を使用してバー・チャートを表示',
      category: 'Visualizations'
    },
  ];
  readonly pageArray = ko.observableArray(this.pageData);
  readonly pageDataProvider = new ArrayDataProvider<Page['pageId'], Page>(this.pageArray, { keyAttributes: 'pageId' });

  private router: CoreRouter;

  gotoPage = (event: ojListView.ojItemAction<Page['pageId'], Page>) => {
    const selectedItem = event.detail.context.data;
    this.router.go({ path: selectedItem.pageId });
  };

  initialize = (args) => {
    this.router = args.parentRouter;
  };
}

export = new HomeViewModel();