import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsComponent } from './components/toasts/toasts.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    ToastsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbToastModule
  ],
  exports:[
    ToastsComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
