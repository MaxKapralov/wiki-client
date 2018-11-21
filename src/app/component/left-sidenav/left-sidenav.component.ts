import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent implements OnInit {

  @Input() loggedInUser: User;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }
  signout() {
    this.authService.signOut();
  }
}
