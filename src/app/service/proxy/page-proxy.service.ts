import { Injectable } from '@angular/core';
import { PageService } from '../entity/page.service';
import { map } from 'rxjs/operators';
import { Page } from '../../model/page';
import { Observable } from 'rxjs';
import { SystemMessageService } from '../system-message.service';
import { EntityProxyService } from './entity-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class PageProxyService extends EntityProxyService<Page> {

  constructor(private pageService: PageService, systemMessageService: SystemMessageService) {
    super(pageService, systemMessageService);
  }

  getPageByLink(link: string): Observable<Page> {
    return this.pageService.getAll({link: link, lastVersion: true}).pipe(map(data => data[0]));
  }
  getAllForAuthor(id: number): Observable<Page[]> {
    return this.pageService.getAll({ author: id, lastVersion: true });
  }
  getAvailable(id: number): Observable<Page[]> {
    return this.pageService.getAvailablePages(id);
  }
  getHistory(link: string): Observable<Page[]> {
    return this.pageService.getAll({link: link, lastVersion: false});
  }
}
