import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryService extends BaseService {

  override getEntityUrl(){
    return "gallery";
  }
}
