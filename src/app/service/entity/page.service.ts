import { Injectable } from '@angular/core';
import { Page } from '../../model/page';
import { EntityService } from './entity.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemMessageService } from '../system-message.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService extends EntityService<Page> {

  constructor(http: HttpClient, systemMessageService: SystemMessageService) {
    super(http, 'pages', systemMessageService);
  }
  getAvailablePages(id: number): Observable<Page[]> {
    return this.http.get<Page[]>(`${this.url}/available`, {params: PageService.httpParams({id: id})})
      .pipe(catchError(this.errorHandler()));
  }
  getHistory(link: string): Observable<Page[]> {
    return this.http.get<Page[]>(`${this.url}/history`, {params: PageService.httpParams({link: link})})
      .pipe(catchError(this.errorHandler()));
  }
  search(searchTerm: string): Observable<Page[]> {
    return this.http.get<Page[]>(`${this.url}/search`, {params: PageService.httpParams({searchTerm: searchTerm})})
      .pipe(catchError(this.errorHandler()));
  }
}
