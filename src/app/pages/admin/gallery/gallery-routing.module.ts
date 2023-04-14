import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryEditComponent } from './gallery-edit/gallery-edit.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

const routes: Routes = [
  { path: 'list', component: GalleryListComponent },
  { path: 'create', component: GalleryEditComponent },
  { path: 'update/:id', component: GalleryEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
