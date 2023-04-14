import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsComponent } from './components/toasts/toasts.component';

@NgModule({
  declarations: [
    ToastsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbToastModule
  ],
  exports:[
    ToastsComponent
  ]
})
export class SharedModule { }
