import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Page } from '../../../model/page';

@Component({
  selector: 'app-page-from-history',
  templateUrl: './page-from-history.component.html',
  styleUrls: ['./page-from-history.component.css']
})
export class PageFromHistoryComponent implements OnInit {

  page: Page;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.page = this.data;
  }

  ngOnInit() {
  }

}
