import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { SitesService } from 'src/app/services/sites.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-sites-edit',
  templateUrl: './sites-edit.component.html',
  styleUrls: ['./sites-edit.component.css'],
})
export class SitesEditComponent {
  constructor(
    private fb: FormBuilder,
    private service: SitesService,
    private toastService: AppToastService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  form: any;
  fileToUpload: any = null;
  catArr: any[] = [];
  blob: any;
  id?: any = null;
  sites?: any = {
    title: '',
    description: '',
    picture: '',
    url: '',
    categories: [],
  };

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.sites.title, Validators.required),
      description: new FormControl(this.sites.description, Validators.required),
      picture: new FormControl(this.sites.picture, Validators.required),
      url: new FormControl(this.sites.url, Validators.required),
    });
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id != null || this.id != undefined) {
        this.service.find(this.id).then((datas: any) => {
          this.sites = datas.entity;
          console.log(this.sites);
          this.form.patchValue({
            title: this.sites.title,
            description: this.sites.description,
            picture: this.sites.picture,
            url: this.sites.url,
          });
        });
      }
    });
    this.getCategories();
  }

  getCategories() {
    this.http.get(SERVER_URL + '/api/category/all', {}).subscribe((datas:any)=>{
      this.catArr = datas.list;
    })
    console.log(this.catArr);
  }

  file(event: any) {
    this.fileToUpload = event.target.files[0];
    console.log(this.fileToUpload)
    const fr = new FileReader();
    fr.readAsArrayBuffer(this.fileToUpload);
    fr.onload = () => {
      let result = fr.result || '';
      this.blob = new Blob([result]);
    };
  }

  async uploadFile(file: any) {
    if(file){
      await this.service.postFile(file, this.blob).then(
        (data: any) => {
          console.log("success");
        },
        (error: any) => {
          console.log(error);
        }
        )
      }
    }

  async submit(form: any) {
    if(this.fileToUpload != null){
      this.uploadFile(this.fileToUpload);
      form.value.picture = this.fileToUpload.name.replace(/C:\\fakepath\\/, '');
      console.log(form.value.picture)
    }
    if (this.id != null || this.id != undefined) {
      this.service.update(this.id, form.value).then(
        (response: any) => {
          this.toastService.showSuccess('Les changements ont été enregistrés');
          console.log(response);
          this.router.navigate(['admin/sites/list']);
        },
        (error: any) => {
          this.toastService.showDanger('Une erreur est survenue');
          console.log(error);
        }
      );
    } else {
      this.service.create(form.value).then(
        (response: any) => {
          this.toastService.showSuccess('Le site a été créé');
          console.log(response.entity);
          this.router.navigate(['admin/sites/list']);
        },
        (error: any) => {
          this.toastService.showDanger('Une erreur est survenue');
          console.log(error);
        }
      );
    }
  }
}
