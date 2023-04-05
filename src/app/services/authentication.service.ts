import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public httpClient: HttpClient) { }

  url = SERVER_URL + '/api/public/login';

  public login(form: any) {
    return firstValueFrom(this.httpClient.post(this.url, { form }))
  };
}
