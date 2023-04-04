import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router, ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';
import { slideInAnimation } from './app.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'frizbi-front-v3';
  loggedIn: boolean = false;
  clicked: boolean = true;
  authService: any;
  userService: any;
  appService: any;
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private contexts: ChildrenOutletContexts
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.authService.unsubscribe();
  }

  logout() {
    this.userService.logout();
  }

  hasPermission(permission: string) {
    return this.appService.hasPermission(permission);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
