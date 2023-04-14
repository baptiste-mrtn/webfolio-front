import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private toastService: AppToastService,
    private router: Router
  ) {}

  loginForm: any;
  user?: User | null;

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submit(form: any) {
    this.authService.login(form.value.username, form.value.password).subscribe(
      (response: any) => {
        this.toastService.showSuccess('Connexion réussie');
        this.router.navigate(['/admin/sites/list']);
        console.log(response);
      },
      (error: any) => {
        this.toastService.showDanger('Une erreur est survenue');
        console.log(error);
      }
    );
  }
}
