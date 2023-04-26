import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { GalleryService } from 'src/app/services/gallery.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-gallery-edit',
  templateUrl: './gallery-edit.component.html',
  styleUrls: ['./gallery-edit.component.css'],
})
export class GalleryEditComponent {
  constructor(
    private service: GalleryService,
    private toastService: AppToastService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  form: any;
  fileToUpload: any = null;
  catArr: any[] = [];
  catArrSelected: any[] = [];
  blob: any;
  id?: any = null;
  gallery?: any = {
    title: '',
    description: '',
    picture: '',
    categories: [],
  };

  ngOnInit() {
    this.getCategories();
    this.form = new FormGroup({
      title: new FormControl(this.gallery.title, Validators.required),
      description: new FormControl(
        this.gallery.description,
        Validators.required
      ),
      picture: new FormControl(this.gallery.picture, Validators.required),
      categories: new FormControl(this.gallery.categories),
    });
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id != null || this.id != undefined) {
        this.service.find(this.id).then((datas: any) => {
          this.gallery = datas.entity;
          console.log(datas.entity);
          for (let cat of this.gallery.categories) {
            this.catSelected(cat);
          }
          this.form.patchValue({
            title: this.gallery.title,
            description: this.gallery.description,
            picture: this.gallery.picture,
            categories: this.catArrSelected,
          });
        });
      }
    });
  }

  getCategories() {
    this.http
      .get(SERVER_URL + '/api/category/all', {})
      .subscribe((datas: any) => {
        this.catArr = datas;
      });
  }

  catSelected(cat: any): void {
    const index = this.catArrSelected.findIndex((c: any) => c.id === cat.id);
    if (index !== -1) {
      this.catArrSelected.splice(index, 1);
    } else {
      this.catArrSelected.push({ id: cat.id });
    }
  }

  file(event: any) {
    this.fileToUpload = event.target.files[0];
    console.log(this.fileToUpload);
    const fr = new FileReader();
    fr.readAsArrayBuffer(this.fileToUpload);
    fr.onload = () => {
      let result = fr.result || '';
      this.blob = new Blob([result]);
    };
  }

  isChecked(item: any) {
    for (let itemArr of this.gallery.categories) {
      if (item == itemArr.name) {
        return true;
      }
    }
    return false;
  }

  async uploadFile(file: any) {
    if (file) {
      await this.service.postFile(file).then(
        (data: any) => {
          console.log('send success');
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  async submit(form: any) {
    form.value.categories = this.catArrSelected;
    if (this.fileToUpload != null) {
      await this.uploadFile(this.fileToUpload).then((data) => {
        form.value.picture = this.fileToUpload.name.replace(
          /C:\\fakepath\\/,
          ''
        );
      });
    } else {
      form.value.picture = this.gallery.picture;
    }
    if (this.id != null || this.id != undefined) {
      this.service.update(this.id, form.value).then(
        (response: any) => {
          this.toastService.showSuccess('Les changements ont été enregistrés');
          console.log(response);
          this.router.navigate(['admin/gallery/list']);
        },
        (error: any) => {
          this.toastService.showDanger('Une erreur est survenue');
          console.log(error);
        }
      );
    } else {
      this.service.create(form.value).then(
        (response: any) => {
          this.toastService.showSuccess('L\'item a été créé');
          console.log(response.entity);
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
