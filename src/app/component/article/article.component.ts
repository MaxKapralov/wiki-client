import { Component, OnInit } from '@angular/core';
import { Page } from '../../model/page';
import { ActivatedRoute } from '@angular/router';
import { PageProxyService } from '../../service/proxy/page-proxy.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Page;
  constructor(private pageProxy: PageProxyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageProxy.getPageByLink(this.route.snapshot.params['link']).subscribe(page => this.article = page);
  }

}
