import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { SERVER_URL } from 'src/environments/environment';
import { Sites } from '../interfaces/sites';


@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor(public httpClient: HttpClient) { }

  url = SERVER_URL + '/api/sites/';

  public findAll() {
    return firstValueFrom(this.httpClient.post(this.url + 'all', {}))
  };

  public find(id: string) {
    return firstValueFrom(this.httpClient.get(this.url + id, {}))
  };

  public update(id: string, object: Sites) {
    return firstValueFrom(this.httpClient.put(this.url + id, object))
  };

  public create(object: Sites) {
    return firstValueFrom(this.httpClient.post(this.url, object))
  };

  public delete(id: string) {
    return firstValueFrom(this.httpClient.delete(this.url + id))
  };
}