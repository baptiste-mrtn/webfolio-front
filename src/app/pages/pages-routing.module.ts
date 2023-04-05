import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { InfosComponent } from './infos/infos.component';
import { SitesComponent } from './sites/sites.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { PassLostComponent } from './pass-lost/pass-lost.component';
// import { PassNewComponent } from './pass-new/pass-new.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sites', component: SitesComponent },
  { path: 'gallery', component: GalleryComponent },
  // { path: 'public', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  // { path: 'public_dl', loadChildren: () => import('./token/token.module').then(m => m.TokenModule) },
  // { path: 'pass-lost', component: PassLostComponent },
  // { path: 'public/changementmotdepasse/:token', component: PassLostSubmitComponent },
  // { path: 'public/initialisation/:token', component: UserInitComponent },
  // { path: 'pass-new', component: PassNewComponent },
  // { path: 'auth-2-factors', component: AuthFactorsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  PageNotFoundComponent,
  // LoginComponent,
  // PassLostComponent,
  // PassNewComponent,
  // AuthFactorsComponent
]
export const routing = RouterModule.forChild(routes)
