import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { GalleryService } from 'src/app/services/gallery.service';
import { Sites } from 'src/app/interfaces/sites';

@Component({
  selector: 'app-sites-read',
  templateUrl: './sites-read.component.html',
  styleUrls: ['./sites-read.component.css']
})
export class SitesReadComponent {
  constructor(
    private fb: FormBuilder,
    private service: GalleryService,
    private toastService: AppToastService,
  ) {}

  @Input()
  id?: number;
  site: Sites | undefined;
  form: any;
  reviews: any;
  ls = JSON.parse(localStorage.getItem('user') || '{"token": "NULL"}');
  moy = 0;
  currentRate=4;

  ngOnInit() {
    if (this.id != null || this.id != undefined) {
      this.service.find(this.id).then((datas: any) => {
        this.site = datas.entity;
      });
      this.form = new FormGroup({
        rate: new FormControl([this.currentRate, Validators.required]),
        comment: new FormControl(['', Validators.required]),
        title: new FormControl(['', Validators.required]),
      })
    }
    this.site = {id:1,title:"test", description:"test",createdAt:new Date(), url:"https://google.fr", picture:"https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg", reviews:[{title:"cool", comment:"c'est sympa", rate:3, author:"jean Dupont", createdAt:new Date()}]}
    this.ls.token = "NULL";
  }

  getMoyenneReviews(){
    let arrRates : any[] = [];
    if(this.site){

      for(let rates of this.site.reviews){
        arrRates.push(rates.rate);
      }
      };

    let moyenne = 0;
    for(let i = 0; i < arrRates.length; i++){
      moyenne += arrRates[i++];
    }
    this.moy = moyenne / arrRates.length;
  }

  submit(form: any) {
      this.service.update(this.id, form.values).then(
        (response: any) => {
          this.toastService.showSuccess('Merci pour votre avis');
          console.log(response);
        },
        (error: any) => {
          this.toastService.showDanger('Une erreur est survenue');
          console.log(error);
        }
      );
    }
}
