import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(
    private fb: FormBuilder,
    private toastService: AppToastService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  form: any;

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
      obj: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  submit(form:any){
    if(form.valid){
      console.log("ok")
    }
  }
}
