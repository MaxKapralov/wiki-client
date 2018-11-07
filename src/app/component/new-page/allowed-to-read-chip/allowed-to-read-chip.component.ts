import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../model/user';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { UserService } from '../../../service/entity/user.service';
import { UserStorageService } from '../../../auth/user-storage.service';
import { map, startWith } from 'rxjs/operators';
import { environment } from '../../../environment';

@Component({
  selector: 'app-allowed-to-read-chip',
  templateUrl: './allowed-to-read-chip.component.html',
  styleUrls: ['./allowed-to-read-chip.component.css']
})
export class AllowedToReadChipComponent implements OnInit {

  form: FormGroup;
  allowedUsers: User[] = [];
  users: User[] = [];
  separatorKeyCodes: number[] = [ENTER, COMMA];
  filteredUsers: Observable<User[]>;
  avatarUrl = environment.avatarUrl;
  constructor(private builder: FormBuilder, private userService: UserService,
              private userStorageService: UserStorageService) {
    this.form = builder.group({
      users: [null]
    });
    userService.getAll().subscribe(data => {
      this.users = data;
      this.valueChanges();
    });
  }

  ngOnInit() {
  }
  add(event: MatChipInputEvent) {}

  select(event: MatAutocompleteSelectedEvent) {
    this.allowedUsers.push(event.option.value);
    this.form.get('users').setValue(null);
  }
  remove(user: User) {
    const index = this.allowedUsers.indexOf(user);
    if (index >= 0) {
      this.allowedUsers.splice(index, 1);
    }
  }
  valueChanges() {
    this.filteredUsers = this.form.get('users').valueChanges.pipe(
      startWith(null),
      map((user: User| null) => user ? this._filter(user) : this.getAvailableUsers().slice())
    );
  }
  getAvailableUsers(): User[] {
    return this.users.filter(user => !this.allowedUsers.includes(user))
      .filter(user => user.username !== this.userStorageService.getUser());
  }
  _filter(user: User): User[] {
    return this.getAvailableUsers().filter(val => val.username === user.username);
  }
  get allowed() {
    return this.allowedUsers;
  }
  set allowed(array: User[]) {
    this.allowedUsers = array;
  }
}
