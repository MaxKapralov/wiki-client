import { Component, OnInit } from '@angular/core';
import { Page } from '../../model/page';
import { ActivatedRoute } from '@angular/router';
import { PageProxyService } from '../../service/proxy/page-proxy.service';
import { MatDialog } from '@angular/material';
import { PageFromHistoryComponent } from './page-from-history/page-from-history.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Page;
  history: Page[];
  constructor(private pageProxy: PageProxyService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.pageProxy.getPageByLink(this.route.snapshot.params['link']).subscribe(page => {
      this.article = page;
      this.pageProxy.getHistory(this.route.snapshot.params['link']).subscribe(items => this.history = items);
    });
  }
  viewPage(page: Page) {
    this.dialog.open(PageFromHistoryComponent, {data: page});
  }

}
