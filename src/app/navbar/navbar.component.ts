import { Component, EventEmitter, Output } from '@angular/core';
import { HostListener } from '@angular/core';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor() {
    this.konami = new EventEmitter<void>();
    this.sequence = [];
    this.konamiCode = [
      'arrowup', 'arrowup',
      'arrowdown', 'arrowdown',
      'arrowleft', 'arrowright',
      'arrowleft', 'arrowright',
      'b', 'a'
    ];
  }

  @Output() private konami: EventEmitter<void>;
  private sequence: string[];
  private konamiCode: string[];

  konamiOk: boolean = false;
  server: string = SERVER_URL;
  menuItems: any = [];
  width: any = null;
  ngOnInit() {
    this.initMenuItems();
  }

  initMenuItems() {
    this.menuItems = [
      { id: 0, name: "Infos", icon: 'info', route: '/infos' },
      { id: 1, name: "Contact", icon: 'send', route: '/contact' },
      { id: 2, name: "Sites", icon: 'devices', route: '/sites' },
      { id: 3, name: "Galerie", icon: 'image', route: '/gallery' }
    ];
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key) {
      this.sequence.push(event.key.toLowerCase());

      if (this.sequence.length > this.konamiCode.length) {
        this.sequence.shift();
      }

      if (this.isKonamiCode()) {
        this.konamiOk = !this.konamiOk;
        console.log('KONAMI !')
        this.konami.emit();
      }
    }
  }

  onMouseOver(id: number) {
    let el = document.getElementById('item-' + id) as HTMLElement;
    el.classList.add("trans-" + id)
  }

  onMouseOut(id: number) {
    let el = document.getElementById('item-' + id) as HTMLElement;
    el.classList.remove("trans-" + id)
  }

  isKonamiCode(): boolean {
    return this.konamiCode.every((code: string, index: number) => code === this.sequence[index]);
  }
}
