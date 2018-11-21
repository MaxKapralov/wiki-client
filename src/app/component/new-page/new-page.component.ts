import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { UserStorageService } from '../../auth/user-storage.service';
import { Page } from '../../model/page';
import { ActivatedRoute } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { AllowedToReadChipComponent } from './allowed-to-read-chip/allowed-to-read-chip.component';
import { PageProxyService } from '../../service/proxy/page-proxy.service';
import { UserProxyService } from '../../service/proxy/user-proxy.service';
import { SystemMessageService } from '../../service/system-message.service';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  newPage: FormGroup;
  title = 'Create New Page';
  userCtrl = new FormControl();
  author: User;
  @ViewChild('chipComponent') chip: AllowedToReadChipComponent;
  @ViewChild('editor') editor: EditorComponent;


  constructor(private formBuilder: FormBuilder, private userProxyService: UserProxyService, private userStorageService: UserStorageService,
              private pageProxyService: PageProxyService, private route: ActivatedRoute,
              private systemMessageService: SystemMessageService) {
    this.newPage = formBuilder.group({
      title: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.userProxyService.getUser().subscribe((data: User) => {
      this.author = data;
    });
  }

  reset() {
    this.newPage.reset();
    this.userCtrl.reset();
    this.editor.html = '';
    this.chip.allowed = [];
  }

  createPage() {
    if (!this.editor.html) {
      this.systemMessageService.show('Content is required!');
      return;
    }
    const page: Page = {
      content: this.editor.html,
      title: this.newPage.get('title').value,
      author: this.author,
      allowedToRead: this.chip.allowed,
      timestamp: new Date()
    };
    this.pageProxyService.addEntity(page);
    this.reset();
  }
}
