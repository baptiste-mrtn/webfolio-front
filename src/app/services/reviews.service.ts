import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { SERVER_URL } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService extends BaseService{

  override getEntityUrl(){
    return "reviews";
  }

  public myReviews(){
    return firstValueFrom(
      this.httpClient.get(SERVER_URL + '/api/' + this.getEntityUrl() +'/myreviews/', {
        headers: this.headersUser,
      })
    );
  }
}
