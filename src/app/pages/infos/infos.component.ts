import { query } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent {

  logiciels: any[] = [];
  langages: any[] = [];

  ngOnInit() {
    this.initDatas();
  }

  initDatas() {
    this.logiciels = [
      { id: 0, alt: "Photoshop", src: "https://cdn.pixabay.com/photo/2015/11/27/10/55/photoshop-1065296_1280.jpg" },
      { id: 1, alt: "Illustrator", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Illustrator_CC_icon.png/492px-Illustrator_CC_icon.png" },
      { id: 2, alt: "InDesign", src: "https://grafikart.fr/uploads/icons/indesign.svg" },
      { id: 3, alt: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    ];
    this.langages = [
      { id: 0, alt: "HTML", src: "https://osakalehusky.com/uploads/162b323c3c4f71309706_1655907267.png" },
      { id: 1, alt: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" },
      { id: 2, alt: "JS", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" },
      { id: 3, alt: "PHP", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" },
    ];
  }

}
