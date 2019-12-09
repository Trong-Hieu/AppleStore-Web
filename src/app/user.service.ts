import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase'
import { AppUser } from './models/app-user';
//import { ObservableInput } from 'rxjs';
import { AngularFireObject } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  // Lưu data user vào firebase
  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // đọc data user từ firebase
  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }

}
