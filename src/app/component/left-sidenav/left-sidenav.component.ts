import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent implements OnInit {

  @Input() loggedInUser: User;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }
}
