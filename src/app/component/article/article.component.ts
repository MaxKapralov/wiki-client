import { Component, OnInit } from '@angular/core';
import { Page } from '../../model/page';
import { PageService } from '../../service/entity/page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Page;
  constructor(private pageService: PageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageService.getAll({link: this.route.snapshot.params['link']}).subscribe(data => {
      this.article = data[0];
    });
  }

}
