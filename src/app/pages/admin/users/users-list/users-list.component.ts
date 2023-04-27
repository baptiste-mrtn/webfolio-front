import { Component } from '@angular/core';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { UsersService } from 'src/app/services/users.service';
import { SERVER_URL } from 'src/environments/environment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  constructor(
    private service: UsersService,
    private toastService: AppToastService
  ) {}

  users: any = [];
  ngOnInit() {
    this.service.findAll().then((datas: any) => {
      console.log(datas);
      this.users = datas.list;
    });
  }

  async delete(id: any) {
    await this.service.delete(id).then(
      (datas) =>  {
        console.log(datas);
        this.toastService.showSuccess('Élement supprimé');
        this.service.reloadAfterSeconds(3);
      },
      (error) => {
        this.toastService.showDanger('Une erreur est survenue: ' + error);
      }
      );

  }
}
