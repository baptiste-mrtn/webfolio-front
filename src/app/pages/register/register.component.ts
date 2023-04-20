import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private service: UsersService,
    private toastService: AppToastService,
    private router: Router
  ) { }

  form: any;
  user?: User | null;

  ngOnInit() {
    this.form = this.fb.group({
      lastname: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: ['', Validators.required],
      validPassword: ['', Validators.required],
    });
  }

  checkPwdValidity(pass: string, validPass: string) {
    if (pass === validPass) {
      return true;
    } else {
      return false;
    }
  }

  submit(form: any) {
    if (this.checkPwdValidity(form.value.password, form.value.validPassword) === true) {
      this.service.create(form.value).then(
        (response: any) => {
          this.toastService.showSuccess('Création de compte réussie');
          this.router.navigate(['/login']);
          console.log(response);
        },
        (error: any) => {
          this.toastService.showDanger('Une erreur est survenue');
          console.log(error);
        }
      );
    } else {
      this.toastService.showDanger('Les mots de passe doivent être identiques');
    }
  }
}
