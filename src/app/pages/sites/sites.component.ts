import { Component } from '@angular/core';
import { SitesService } from 'src/app/services/sites.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  constructor(private service: SitesService) { }

  sites: any = [];
  url = SERVER_URL + '/uploads/sites/'
  ngOnInit() {
    this.service.findAll().then((datas:any) => {
      console.log(datas);
      this.sites = datas.list;
    })
  }
}
