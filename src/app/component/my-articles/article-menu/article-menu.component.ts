import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '../../../model/page';

@Component({
  selector: 'app-article-menu',
  templateUrl: './article-menu.component.html',
  styleUrls: ['./article-menu.component.css']
})
export class ArticleMenuComponent implements OnInit {

  @Input() page: Page;
  @Output() deleteEmitted: EventEmitter<number> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToArticle(path: string, title: string) {
    this.router.navigate([path, title.replace(/\s+/g, '')]);
  }
  blockArticle(id: number) {
    this.deleteEmitted.emit(id);
  }
}
