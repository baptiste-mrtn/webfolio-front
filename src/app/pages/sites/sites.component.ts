import { Component } from '@angular/core';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  constructor(private service: SitesService) { }

  sites: any = [];

  ngOnInit() {
    this.service.findAll().then((datas) => {
      console.log(datas);
      this.sites = datas;
      this.sites = [
        { id: 0, title: 'test', description: 'vlavlalvalvalvalva', picture: 'blabla.jpg', url: 'blabla.html', categories: ['PHP', 'JS', 'HTML'] },
        { id: 1, title: 'test1', description: 'vlavlalvalvalvalva', picture: 'blabla.jpg', url: 'blabla.html', categories: ['PHP', 'JS', 'HTML'] },
        { id: 2, title: 'test2', description: 'vlavlalvalvalvalva', picture: 'blabla.jpg', url: 'blabla.html', categories: ['PHP', 'JS', 'HTML'] },
        { id: 3, title: 'test3', description: 'vlavlalvalvalvalva', picture: 'blabla.jpg', url: 'blabla.html', categories: ['PHP', 'JS', 'HTML'] },
        { id: 4, title: 'test4', description: 'vlavlalvalvalvalva', picture: 'blabla.jpg', url: 'blabla.html', categories: ['PHP', 'JS', 'HTML'] },
        { id: 5, title: 'test5', description: 'vlavlalvalvalvalva', picture: 'blabla.jpg', url: 'blabla.html', categories: ['PHP', 'JS', 'HTML'] },
        { id: 6, title: 'test6', description: 'vlavlalvalvalvalva', picture: 'blabla.jpg', url: 'blabla.html', categories: ['PHP', 'JS', 'HTML'] },
        { id: 7, title: 'test7', description: 'vlavlalvalvalvalva', picture: 'blabla.jpg', url: 'blabla.html', categories: ['PHP', 'JS', 'HTML'] },
        { id: 8, title: 'test8', description: 'vlavlalvalvalvalva', picture: 'blabla.jpg', url: 'blabla.html', categories: ['PHP', 'JS', 'HTML'] },
      ]
    })
  }
}
