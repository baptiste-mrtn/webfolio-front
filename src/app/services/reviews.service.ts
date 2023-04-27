import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService extends BaseService{

  override getEntityUrl(){
    return "reviews";
  }
}
