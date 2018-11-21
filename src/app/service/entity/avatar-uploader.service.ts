import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { SystemMessageService } from '../system-message.service';

@Injectable({
  providedIn: 'root'
})
export class AvatarUploaderService {

  private readonly url: string;
  constructor(private http: HttpClient, private systemMessageService: SystemMessageService) {
    this.url = `${environment.apiUrl}/image/avatar`;
  }
  add(data: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.url, data).pipe(catchError(this.errorHandler()));
  }
  protected errorHandler<R>(result?: R) {
    return (error: any): Observable<any> => {
      this.systemMessageService.show('Error');
      return EMPTY;
    };
  }
}
