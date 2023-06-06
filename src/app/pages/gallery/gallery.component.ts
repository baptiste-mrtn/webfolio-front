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

  url = SERVER_URL + '/uploads/gallery/'
  gallery: any = [];
  categories: any[] = ['tous','photoshop','illustrator','digital painting'];
  selected: string = "";
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.findAll().then((datas:any) => {
      console.log(datas);
        this.selected = 'tous';
        this.gallery = datas.list;
    })
  }

  findByCat(cat:string){
    this.selected = cat;
    if(cat === 'tous'){
        this.getAll();
    } else {
      this.service.findByCategory(cat).then((datas:any)=>{
        this.gallery = datas.list;
      })
    }
  }

  showHover(id:number){
    let el = document.getElementById("gal"+id);
    el?.classList.remove("scale-down-ver-center")
    el?.classList.add("scale-up-ver-center")

  }

  hideHover(id:number){
    let el = document.getElementById("gal"+id);
    el?.classList.add("scale-down-ver-center")
    el?.classList.remove("scale-up-ver-center")
  }
}
