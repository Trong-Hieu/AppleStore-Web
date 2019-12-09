import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  // lấy dữ liệu categories từ firebase
  getCategories(){
    //return this.db.list('/categories');
    return this.db.list('/categories', ref =>{
      // query: {
      //   orderByChild: 'name'
      // }
      return ref.orderByChild('name')
    });
  }

}
