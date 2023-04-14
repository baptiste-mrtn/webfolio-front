import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private httpClient: HttpClient) { }
  token = JSON.parse(localStorage.getItem('user') || '{token: NULL}');
  headersImage = new HttpHeaders({
    Authorization: `Bearer ${this.token.token}`,
  });

  postFile(fileToUpload: File, blob?: Blob) {
    console.log(fileToUpload);
    const endpoint = SERVER_URL + '/api/sites/file';
    const formData: FormData = new FormData();
    formData.append('picture', fileToUpload, fileToUpload.name);
    console.log(formData.get('picture'));
    return firstValueFrom(
      this.httpClient.post(endpoint, formData, {
        headers: this.headersImage,
      })
    );
  }
}
