import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, routingComponents } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InfosComponent } from './infos/infos.component';
import { SitesComponent } from './sites/sites.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SitesListComponent } from './admin/sites/sites-list/sites-list.component';
import { SitesEditComponent } from './admin/sites/sites-edit/sites-edit.component';
import { GalleryListComponent } from './admin/gallery/gallery-list/gallery-list.component';
import { GalleryEditComponent } from './admin/gallery/gallery-edit/gallery-edit.component';
import { ProfilComponent } from './profil/profil.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UsersListComponent } from './admin/users/users-list/users-list.component';
import { UsersEditComponent } from './admin/users/users-edit/users-edit.component';
import { SitesReadComponent } from './sites/sites-read/sites-read.component';
import { GalleryReadComponent } from './gallery/gallery-read/gallery-read.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    routingComponents,
    InfosComponent,
    SitesComponent,
    GalleryComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    SitesListComponent,
    SitesEditComponent,
    GalleryListComponent,
    GalleryEditComponent,
    ProfilComponent,
    UsersListComponent,
    UsersEditComponent,
    SitesReadComponent,
    GalleryReadComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgbRatingModule
  ],
})
export class PagesModule {}
