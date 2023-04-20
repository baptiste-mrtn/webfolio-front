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
import { AuthGuard } from '../services/auth.guard';
import { ProfilComponent } from './profil/profil.component';
import { SitesReadComponent } from './sites/sites-read/sites-read.component';
import { GalleryReadComponent } from './gallery/gallery-read/gallery-read.component';
// import { PassLostComponent } from './pass-lost/pass-lost.component';
// import { PassNewComponent } from './pass-new/pass-new.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sites', component: SitesComponent },
  { path: 'sites/read/:id', component: SitesReadComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/read/:id', component: GalleryReadComponent },
  {
    path: 'admin/sites',
    canActivate: [AuthGuard],
    data: { role: 'ROLE_USER' },
    loadChildren: () =>
      import('./admin/sites/sites.module').then((mod) => mod.SitesModule),
  },
  {
    path: 'admin/gallery',
    canActivate: [AuthGuard],
    data: { role: 'ROLE_USER' },
    loadChildren: () =>
      import('./admin/gallery/gallery.module').then((mod) => mod.GalleryModule),
  },
  {
    path: 'admin/users',
    canActivate: [AuthGuard],
    data: { role: 'ROLE_USER' },
    loadChildren: () =>
      import('./admin/users/users.module').then((mod) => mod.UsersModule),
  },
  // { path: 'public', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  // { path: 'public_dl', loadChildren: () => import('./token/token.module').then(m => m.TokenModule) },
  // { path: 'pass-lost', component: PassLostComponent },
  // { path: 'public/changementmotdepasse/:token', component: PassLostSubmitComponent },
  // { path: 'public/initialisation/:token', component: UserInitComponent },
  // { path: 'pass-new', component: PassNewComponent },
  // { path: 'auth-2-factors', component: AuthFactorsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  PageNotFoundComponent,
  // PassLostComponent,
  // PassNewComponent,
  // AuthFactorsComponent
];
export const routing = RouterModule.forChild(routes);
