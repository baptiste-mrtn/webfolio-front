import { Component } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor(private service: GalleryService) { }

  gallery: any = [];
  url = SERVER_URL + '/uploads/gallery/'
  ngOnInit() {
    this.service.findAll().then((datas:any) => {
      console.log(datas);
      this.gallery = datas.list;
    })
  }
}
