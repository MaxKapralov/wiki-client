import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../service/entity/user.service';
import { Resource } from '../../model/resource';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  newPage: FormGroup;
  allUsers: Resource<User>;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.newPage = formBuilder.group({
      title: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.allUsers = data._embedded['users']; // filter - logged in user, change select to mat-chip-list
    });
  }

}
