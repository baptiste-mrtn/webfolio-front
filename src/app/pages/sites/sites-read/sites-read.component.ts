import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { Sites } from 'src/app/interfaces/sites';
import { ReviewsService } from 'src/app/services/reviews.service';
import { SitesService } from 'src/app/services/sites.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-sites-read',
  templateUrl: './sites-read.component.html',
  styleUrls: ['./sites-read.component.css'],
})
export class SitesReadComponent {
  constructor(
    private fb: FormBuilder,
    private service: SitesService,
    private reviewService: ReviewsService,
    private toastService: AppToastService,
    private route: ActivatedRoute
  ) {}

  @Input()
  id?: number;
  site?: Sites | undefined;
  form: any;
  reviews: any;
  ls = JSON.parse(localStorage.getItem('user') || '{"token": "NULL"}');
  moy = 0;
  currentRate = 4;
  url = SERVER_URL + '/uploads/sites/';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (this.id != null || this.id != undefined) {
      this.service.find(this.id).then((datas: any) => {
        this.site = datas.entity;
        console.log(this.site)
      });
      this.form = new FormGroup({
        rate: new FormControl((0),[ Validators.required]),
        comment: new FormControl('',[ Validators.required]),
        title: new FormControl('',[ Validators.required])
      });
    }
    this.getMoyenneReviews(this.site);
  }

  getMoyenneReviews(site:any) {
    let arrRates: any[] = [];
      for (let review of site.reviews) {
        console.log(review)
        arrRates.push(review.rate);
    }
    let moyenne = 0;
    for (let i = 0; i < arrRates.length; i++) {
      moyenne += arrRates[i++];
    }
    this.moy = Math.round(moyenne / arrRates.length);
  }

  submit(form: any) {
    form.value.site = this.id;
    console.log(form.value);
    this.reviewService.create(form.value).then(
      (response: any) => {
        this.toastService.showSuccess('Merci pour votre avis');
        console.log(response);
        this.service.reloadAfterSeconds(3);
      },
      (error: any) => {
        this.toastService.showDanger('Une erreur est survenue');
        console.log(error);
      }
    );
  }
}
