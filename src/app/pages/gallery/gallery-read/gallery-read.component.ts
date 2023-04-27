import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from 'src/app/interfaces/gallery';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { GalleryService } from 'src/app/services/gallery.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-gallery-read',
  templateUrl: './gallery-read.component.html',
  styleUrls: ['./gallery-read.component.css']
})
export class GalleryReadComponent {
  constructor(
    private fb: FormBuilder,
    private service: GalleryService,
    private reviewService: ReviewsService,
    private toastService: AppToastService,
    private route: ActivatedRoute
  ) {}

  @Input()
  id?: number;
  gallery?: Gallery | undefined;
  form: any;
  reviews: any;
  ls = JSON.parse(localStorage.getItem('user') || '{"token": "NULL"}');
  moy = 0;
  currentRate = 4;
  url = SERVER_URL + '/uploads/gallery/';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (this.id != null || this.id != undefined) {
      this.service.find(this.id).then((datas: any) => {
        this.gallery = datas.entity;
        console.log(this.gallery)
      });
      this.form = new FormGroup({
        rate: new FormControl((0),[ Validators.required]),
        comment: new FormControl('',[ Validators.required]),
        title: new FormControl('',[ Validators.required])
      });
    }
    this.getMoyenneReviews(this.gallery);
  }

  getMoyenneReviews(gallery:any) {
    let arrRates: any[] = [];
      for (let review of gallery.reviews) {
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
    form.value.gallery = this.id;
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
