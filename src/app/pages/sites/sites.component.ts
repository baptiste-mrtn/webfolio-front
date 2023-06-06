import { Component } from '@angular/core';
import { SitesService } from 'src/app/services/sites.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  constructor(private service: SitesService,) { }

  sites: any = [];
  url = SERVER_URL + '/uploads/sites/';
  categories: any[] = ['tous','html','css','javascript','php'];
  selected: string = "";
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.findAll().then((datas:any) => {
      console.log(datas);
        this.selected = 'tous';
        this.sites = datas.list;
    })
  }

  findByCat(cat:string){
    this.selected = cat;
    if(cat === 'tous'){
        this.getAll();
    } else {
      this.service.findByCategory(cat).then((datas:any)=>{
        this.sites = datas.list;
      })
    }
  }
}
