import { environment } from '../../environment';
import { Entity } from '../../model/entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resource, Resources } from '../../model/resource';
import { Observable } from 'rxjs';

export interface SearchParams {
  [x: string]: string | number | boolean;
}

export abstract class EntityService<T extends Entity> {

  protected readonly url: string;
  protected readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  protected constructor(protected http: HttpClient, private rel: string) {
    this.url = `${environment.apiUrl}/${rel}`;
  }

  static httpParams(params): { [p: string]: string } {
    return Object.entries(params).reduce((res, [key, value]) => {
      if (Array.isArray(value)) {
        value = value.join(',');
      }
      if (value != null && value !== '') {
        res[key] = value.toString();
      }
      return res;
    }, {});
  }

  get(id: number): Observable<Resource<T>> {
    const url = `${this.url}/${id}`;
    return this.http.get<Resource<T>>(url);
  }

  getAll(params = {}): Observable<T[]> {
    return this.http.get<T[]>(this.url, {
      params: EntityService.httpParams(params)
    });
  }

  update(entity: T): Observable<Resource<T>> {
    const url = `${this.url}/${entity.id}`;
    return this.http.put<Resource<T>>(url, entity, this.httpOptions);
  }

  add(entity: T): Observable<Resource<T>> {
    return this.http.post<Resource<T>>(this.url, entity, this.httpOptions);
  }

  delete(id: number): Observable<Resource<T>> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Resource<T>>(url);
  }
}
