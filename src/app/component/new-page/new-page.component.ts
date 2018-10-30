import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../service/entity/user.service';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
import { UserStorageService } from '../../auth/user-storage.service';
import { Page } from '../../model/page';
import { PageService } from '../../service/entity/page.service';
import { EntityComponent } from '../entity/entity.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent extends EntityComponent<Page> implements OnInit {

  newPage: FormGroup;
  allUsers: User[] = [];
  filteredUsers: Observable<User[]>;
  allowedUsers: User[] = [];
  userCtrl = new FormControl();
  loggedInUser: User;
  @ViewChild('auto') matAutoComplete: MatAutocomplete;
  @ViewChild('userInput') userInput: ElementRef<HTMLInputElement>;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private userStorageService: UserStorageService,
              private pageService: PageService) {
    super(pageService);
    this.newPage = formBuilder.group({
      title: [null, Validators.required],
      content: [null, Validators.required]
    });
    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((user: User | null) => {
        return user ? this._filter(user) : this.getAvailableUsers().slice();
      })
    );
  }

  private _filter(user: User): User[] {
    return this.getAvailableUsers().filter(u => u.username !== user.username);
  }

  private getAvailableUsers(): User[] {
    return this.allUsers.filter(user => !this.allowedUsers.includes(user));
  }

  ngOnInit() {
    this.userService.getAll().subscribe(allUsers => {
      this.allUsers = allUsers;
      this.allUsers = this.allUsers.filter(user => user.username !== this.userStorageService.getUser());
    });
    this.userService.getByUsername(this.userStorageService.getUser()).subscribe((data: User) => this.loggedInUser = data);
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutoComplete.isOpen) {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
        console.log(value);
      }
      if (input) {
        input.value = '';
      }
      this.userCtrl.setValue(null);
    }
  }

  remove(user: User): void {
    const index = this.allowedUsers.indexOf(user);
    if (index >= 0) {
      this.allowedUsers = this.allowedUsers.filter(us => us.username !== user.username);

    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.allowedUsers.push(event.option.value);
    this.userCtrl.setValue(null);
    this.userInput.nativeElement.value = '';
  }

  reset() {
    this.newPage.reset();
    this.userCtrl.reset();
    this.allowedUsers = [];
  }

  createPage() {
    const newPage: Page = {
      content: this.newPage.get('content').value,
      title: this.newPage.get('title').value,
      author: this.loggedInUser,
      allowedToRead: this.allowedUsers,
      timestamp: new Date()
    };
    this.save(newPage);
    this.newPage.reset();
  }
}
