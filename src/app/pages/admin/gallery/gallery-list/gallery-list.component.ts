import { Component } from '@angular/core';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { GalleryService } from 'src/app/services/gallery.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css'],
})
export class GalleryListComponent {
  constructor(
    private service: GalleryService,
    private toastService: AppToastService
  ) {}

  url = SERVER_URL + '/uploads/gallery/';
  gallery: any = [];
  ngOnInit() {
    this.service.findAll().then((datas: any) => {
      console.log(datas);
      this.gallery = datas.list;
    });
  }

  async delete(id: any) {
    await this.service.delete(id).then(
      (datas) =>  {
        console.log(datas);
        this.toastService.showSuccess('Élement supprimé');
      },
      (error) => {
        this.toastService.showDanger('Une erreur est survenue: ' + error);
      }
      );
      window.location.reload();
  }
}
