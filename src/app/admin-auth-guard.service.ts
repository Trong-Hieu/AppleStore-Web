import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private userService: UserService
  ) { }

  canActivate(): Observable<boolean>{
    return this.auth.appUser$
    .map(appUser => appUser.isAdmin);
  }
}
