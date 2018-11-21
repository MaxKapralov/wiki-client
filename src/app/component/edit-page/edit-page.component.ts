import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { AllowedToReadChipComponent } from '../new-page/allowed-to-read-chip/allowed-to-read-chip.component';
import { EditorComponent } from '../new-page/editor/editor.component';
import { UserStorageService } from '../../auth/user-storage.service';
import { PageProxyService } from '../../service/proxy/page-proxy.service';
import { SystemMessageService } from '../../service/system-message.service';
import { ActivatedRoute } from '@angular/router';
import { UserProxyService } from '../../service/proxy/user-proxy.service';
import { Page } from '../../model/page';

@Component({
  selector: 'app-edit-page',
  templateUrl: '../new-page/new-page.component.html',
  styleUrls: ['../new-page/new-page.component.css']
})
export class EditPageComponent implements OnInit {

  newPage: FormGroup;
  pageId: number = null;
  title = 'Edit Page';
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
    this.pageProxyService.getPageByLink(this.route.snapshot.params['link']).subscribe(page => {
      this.pageId = page.id;
      this.chip.allowed = page.allowedToRead;
      this.newPage.controls['title'].setValue(page.title);
      this.newPage.controls['title'].disable();
      this.author = page.author;
      this.editor.html = page.content;
    });
  }

  reset() {
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
      id: this.pageId,
      content: this.editor.html,
      title: this.newPage.get('title').value,
      author: this.author,
      allowedToRead: this.chip.allowed,
      timestamp: new Date()
    };
    this.pageProxyService.updateEntity(page);
    this.reset();
  }

}
