import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitesListComponent } from './sites-list/sites-list.component';
import { SitesEditComponent } from './sites-edit/sites-edit.component';

const routes: Routes = [
  {path:"list", component: SitesListComponent},
  {path:"create", component: SitesEditComponent},
  {path:"update/:id", component: SitesEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitesRoutingModule { }
