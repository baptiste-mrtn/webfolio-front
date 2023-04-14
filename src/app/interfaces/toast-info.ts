import { Injectable } from '@angular/core';

export interface ToastInfo {
  body: string;
  header?: any;
  delay?: number;
  class?: string;
}

@Injectable({ providedIn: 'root' })
export class AppToastService {
  toasts: ToastInfo[] = [];

  show(body: string) {
    this.toasts.push({ header: 'Information', body, class: 'bg-bm' });
  }

  showSuccess(body: string) {
    this.toasts.push({
      header: 'Succès',
      body,
      class: 'bg-success text-light',
    });
  }

  showDanger(body: string) {
    this.toasts.push({ header: 'Échec', body, class: 'bg-danger text-light' });
  }

  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter((t) => t != toast);
  }
}
