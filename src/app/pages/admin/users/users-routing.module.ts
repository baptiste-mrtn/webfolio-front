import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

const routes: Routes = [
  {path:"list", component: UsersListComponent},
  {path:"create", component: UsersEditComponent},
  {path:"update/:id", component: UsersEditComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
