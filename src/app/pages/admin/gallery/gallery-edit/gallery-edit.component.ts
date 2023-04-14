import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-edit',
  templateUrl: './gallery-edit.component.html',
  styleUrls: ['./gallery-edit.component.css'],
})
export class GalleryEditComponent {
  constructor(
    private fb: FormBuilder,
    private service: GalleryService,
    private toastService: AppToastService,
    private router: Router
  ) {}

  @Input()
  id?: number;
  gallery?: any;
  form: any;

  ngOnInit() {
    if (this.id != null || this.id != undefined) {
      this.service.find(this.id).then((datas: any) => {
        this.gallery = datas.entity;
      });
      this.form = this.fb.group({
        title: [this.gallery.title, Validators.required],
        description: [this.gallery.description, Validators.required],
        picture: [this.gallery.picture, Validators.required],
        categories: [this.getCategories(), Validators.required],
      });
    } else {
      this.form = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        picture: ['', Validators.required],
        url: ['', Validators.required],
        categories: [[], Validators.required],
      });
    }
  }

  getCategories() {
    let catArr: any[] = [];
    this.gallery.categories.forEach((el: any) => {
      catArr.push(el);
    });
    return catArr;
  }

  submit(form: any) {
    if (this.id != null || this.id != undefined) {
      this.service.update(this.id, form.values).then(
        (response: any) => {
          this.toastService.showSuccess('Les changements ont été enregistrés');
          console.log(response);
        },
        (error: any) => {
          this.toastService.showDanger('Une erreur est survenue');
          console.log(error);
        }
      );
    } else {
      this.service.create(form.values).then(
        (response: any) => {
          this.toastService.showSuccess("L'élement de la galerie a été créé");
          console.log(response);
          this.router.navigate(['admin/gallery/list']);
        },
        (error: any) => {
          this.toastService.showDanger('Une erreur est survenue');
          console.log(error);
        }
      );
    }
  }
}
