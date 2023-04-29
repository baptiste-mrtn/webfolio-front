import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { AuthenticationService } from './services/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppToastService } from './interfaces/toast-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'webfolio';
  loggedIn: boolean = false;
  clicked: boolean = true;
  constructor(
  private authService: AuthenticationService,
  private contexts: ChildrenOutletContexts,
  private jwtHelper: JwtHelperService,
  private toastService: AppToastService,
  ) { }
  ls = JSON.parse(localStorage.getItem('user') || '{"token": "NULL"}');

  ngOnDestroy() {
  }

  logout() {
    this.authService.logout();
  }

  hasPermission() {
    return this.authService.hasPermission();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit():void {
    let token = this.ls.token;
    let userValue = this.ls.data
    if (this.jwtHelper.isTokenExpired(token)) {
      // token expired
      this.toastService.show("Votre délai de connexion est dépassé, veuillez vous reconnecter");
      this.logout();
    } else {
      // token valid
      this.hasPermission();
    }
  }
}

