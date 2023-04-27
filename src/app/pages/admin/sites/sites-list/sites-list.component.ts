import { Component } from '@angular/core';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { SitesService } from 'src/app/services/sites.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css'],
})
export class SitesListComponent {
  constructor(
    private service: SitesService,
    private toastService: AppToastService
  ) {}

  url = SERVER_URL + '/uploads/sites/';
  sites: any = [];
  ngOnInit() {
    this.service.findAll().then((datas: any) => {
      console.log(datas);
      this.sites = datas.list;
    });
  }

  async delete(id: any) {
    await this.service.delete(id).then(
      (datas) =>  {
        console.log(datas);
        this.toastService.showSuccess('Élement supprimé');
        this.service.reloadAfterSeconds(3);
      },
      (error) => {
        this.toastService.showDanger('Une erreur est survenue: ' + error);
      }
      );
  }
}
