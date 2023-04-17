import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  api = '';

  postMessage(form: any) {
    return this.http.post(this.api, form, { responseType: 'text' }).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
          return null;
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
