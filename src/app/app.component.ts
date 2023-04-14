import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router, ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';
import { slideInAnimation } from './app.animation';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';


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
  appService: any;
  constructor(
  private authService: AuthenticationService,
  private contexts: ChildrenOutletContexts,
  ) { }

  ls = JSON.parse(localStorage.getItem('user') || '{"token": "NULL"}');

  ngOnDestroy() {
  }

  logout() {
    this.authService.logout();
  }

  hasPermission(permission: string) {
    return this.appService.hasPermission(permission);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  private isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now();
  }

  ngOnInit():void {
    let token = this.ls.token;
    if (this.isTokenExpired(token)) {
      this.logout();
    } else {
      this.hasPermission(token);
    }
  }

}
