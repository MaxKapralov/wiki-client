import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../model/user';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../service/entity/user.service';
import { UserStorageService } from '../auth/user-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedInUser: User;
  constructor(public authService: AuthService, private router: Router, private userService: UserService,
              private userStorageService: UserStorageService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && authService.isAuthenticated()) {
        this.userService.getByUsername(this.userStorageService.getUser()).subscribe((data: User) => {
          this.loggedInUser = data;
        });
      }
    });
  }
  ngOnInit() {
  }

}
