import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, firstValueFrom, map } from 'rxjs';
import { SERVER_URL, environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { AppToastService } from '../interfaces/toast-info';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private url = SERVER_URL + '/api/public/login';
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(private router: Router, private httpClient: HttpClient, private toastService: AppToastService, private baseService: BaseService) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.httpClient.post<User>(this.url, { username, password }).pipe(
      map((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.toastService.show("Vous avez été déconnecté, la page va être rechargée")
    this.baseService.reloadAfterSeconds(3);
  }

  hasPermission(){
    let user = this.userSubject.getValue();
    let check = user?.data.roles.includes("ROLE_ADMIN") ? true : false
    return check;
  }
}
