import { Injectable } from '@angular/core';
import { Page } from '../../model/page';
import { EntityService } from './entity.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService extends EntityService<Page> {

  constructor(http: HttpClient) {
    super(http, 'pages');
  }
}
