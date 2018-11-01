import { Component, OnInit } from '@angular/core';
import { PageService } from '../../service/entity/page.service';
import { Page } from '../../model/page';
import { UserService } from '../../service/entity/user.service';
import { UserStorageService } from '../../auth/user-storage.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  pages: Page[];
  constructor(private pageService: PageService, private userService: UserService, private userStorageService: UserStorageService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getByUsername(this.userStorageService.getUser()).subscribe((user: User) => {
      this.pageService.getAll({author: user.id}).subscribe(data => this.pages = data);
    });
  }
  navigateToArticle(title: string) {
    this.router.navigate(['/wiki', title.replace(/\s+/g, '')]);
  }

}
