import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }

  homeItems: any = [];
  width: any = null;
  ngOnInit() {
    this.initItems();
    this.width = window.innerWidth;
    this.checkWidth();
  }

  initItems() {
    this.homeItems = [
      { id: 0, name: "Infos", img: '/assets/img/photo-baptiste.jpg', route: '/infos' },
      { id: 1, name: "Contact", img: '/assets/img/contact.jpg', route: '/contact' },
      { id: 2, name: "Sites", img: '/assets/img/sites.jpg', route: '/sites' },
      { id: 3, name: "Galerie", img: '/assets/img/galerie.jpg', route: '/gallery' }
    ]
  }

  isResized: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
    this.checkWidth();
  }

  checkWidth() {
    if (this.width <= 991) {
      this.isResized = true;
    } else {
      this.isResized = false;
    }
  }
}
