import { Component, OnInit } from '@angular/core';
import { Page } from '../../model/page';
import { UserStorageService } from '../../auth/user-storage.service';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { PageProxyService } from '../../service/proxy/page-proxy.service';
import { UserProxyService } from '../../service/proxy/user-proxy.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  pages: Page[];
  userId: number;
  constructor(private pageProxyService: PageProxyService, private userProxyService: UserProxyService,
              private userStorageService: UserStorageService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userProxyService.getUser().subscribe((user: User) => {
      this.userId = user.id;
      this.loadEntities();
    });
  }
  navigateToArticle(path: string, title: string) {
    this.router.navigate([path, title.replace(/\s+/g, '')]);
  }
  deleteArticle(id: number) {
    this.pageProxyService.deleteEntity(id).subscribe(() => this.loadEntities());
  }
  loadEntities() {
    if (this.route.snapshot.url[0].path === 'articles') {
      this.pageProxyService.getAvailable(this.userId).subscribe(data => this.pages = data);
    } else {
      this.pageProxyService.getAllForAuthor(this.userId).subscribe(data => this.pages = data);
    }
  }
  checkAccess(page: Page) {
    return page.author.id === this.userId;
  }
}
