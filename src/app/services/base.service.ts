import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SERVER_URL } from 'src/environments/environment';
import { BaseEntity } from '../interfaces/base-entity';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(public httpClient: HttpClient) {}
  ls = JSON.parse(localStorage.getItem('user') || '{"token": "NULL"}');
  headersUser = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.ls.token}`,
  });

  headersImage = new HttpHeaders({
    //'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${this.ls.token}`,
  });

  getEntityUrl() {
    return '';
  }

  public findAll() {
    return firstValueFrom(
      this.httpClient.get(SERVER_URL + '/api/' + this.getEntityUrl() +'/all', {})
    );
  }

  public find(id: any) {
    return firstValueFrom(
      this.httpClient.get(SERVER_URL + '/api/' +  this.getEntityUrl() +'/read/' + id, {})
    );
  }

  public update(id: any, object: BaseEntity) {
    return firstValueFrom(
      this.httpClient.put(SERVER_URL + '/api/' +  this.getEntityUrl() +'/update/' + id, object, {
        headers: this.headersUser,
      })
    );
  }

  public create(object: BaseEntity) {
    return firstValueFrom(
      this.httpClient.post(SERVER_URL + '/api/' +  this.getEntityUrl() +'/create', object, {
        headers: this.headersUser,
      })
    );
  }

  public delete(id: any) {
    return firstValueFrom(
      this.httpClient.delete(SERVER_URL + '/api/' + this.getEntityUrl() +'/delete/' + id, {
        headers: this.headersUser,
      })
    );
  }

  postFile(fileToUpload: File, blob?: Blob) {
    const endpoint = SERVER_URL + '/api/' +  this.getEntityUrl() +'/file';
    const formData: FormData = new FormData();
    console.log(fileToUpload, blob)
    formData.append('picture', fileToUpload, fileToUpload.name); //, fileToUpload.name
    console.log(formData.get('picture'));
    return firstValueFrom(
      this.httpClient.post(endpoint, formData, {
        headers: this.headersImage,
      })
    );
  }

  reloadAfterSeconds(s:number){
    let ms = s*1000;
    setTimeout(function(){ window.location.reload(); }, ms);
  }
}
