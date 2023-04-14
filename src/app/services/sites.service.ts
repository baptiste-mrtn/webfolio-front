import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class SitesService extends BaseService {

  override getEntityUrl(){
    return "sites";
  }
}

