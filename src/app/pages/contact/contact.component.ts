import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(
    private toastService: AppToastService,
    private router: Router,
    private contactService: ContactService
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
      console.log(form)
      this.contactService.postMessage(form)
      .subscribe(response => {
      this.toastService.showSuccess("Message envoyé");
      this.router.navigateByUrl('/home');
      console.log(response)
      }, error => {
      this.toastService.showDanger("Une erreur est survenue");
      console.warn(error.responseText)
      console.log({ error })
      })
  }
}
