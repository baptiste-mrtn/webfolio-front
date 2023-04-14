import { Component } from '@angular/core';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { GalleryService } from 'src/app/services/gallery.service';

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

  gallery: any = [];

  ngOnInit() {
    this.service.findAll().then((datas) => {
      console.log(datas);
      this.gallery = datas;
    });
  }

  delete(id: any) {
    this.service.delete(id).then(
      (datas) => {
        this.toastService.showSuccess('Élement supprimé');
      },
      (error) => {
        this.toastService.showDanger('Une erreur est survenue: ' + error);
      }
    );
  }
}
