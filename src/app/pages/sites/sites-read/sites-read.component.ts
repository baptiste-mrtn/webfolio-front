import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { GalleryService } from 'src/app/services/gallery.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

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
  site?: any;
  form: any;
  reviews: any;
  ls = JSON.parse(localStorage.getItem('user') || '{"token": "NULL"}');
  moy = 0;

  ngOnInit() {
    if (this.id != null || this.id != undefined) {
      this.service.find(this.id).then((datas: any) => {
        this.site = datas.entity;
      });
      this.form = this.fb.group({
        rate: [5, Validators.required],
        comment: ['', Validators.required],
        title: ['', Validators.required],
      })
    }
  }

  getMoyenneReviews(){
    let arrRates : any[] = [];
    for(let rates of this.site.comments){
      arrRates.push(rates.rate);
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
