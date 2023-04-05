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


@NgModule({
  declarations: [
    routingComponents,
    InfosComponent,
    SitesComponent,
    GalleryComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PagesModule { }
