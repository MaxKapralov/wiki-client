import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/entity/user.service';
import { UserStorageService } from '../../auth/user-storage.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent implements OnInit {

  @Input() loggedInUser: User;
  constructor(private userService: UserService,
              private userStorageService: UserStorageService, private router: Router) { }

  ngOnInit() {
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }
}
