import { Component } from '@angular/core';
import { AppToastService } from 'src/app/interfaces/toast-info';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent {
  constructor(public toastService: AppToastService){}
}
