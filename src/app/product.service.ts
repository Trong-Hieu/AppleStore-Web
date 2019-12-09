import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';
//import { AngularFirestore } from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private db: AngularFireDatabase
  ) { }


  //Đưa dữ liệu vào firebase
  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(){
    this.db.list('products').valueChanges().subscribe(product =>{
      console.log(product);
    })
    //return this.db.list('/products/').valueChanges();
    return this.db.list('/products').snapshotChanges()
      .pipe(map(items => {
        return items.map(a => {
          const id = a.key;
          const title = a.payload.val();
          const price = a.payload.val();
          const category = a.payload.val();
          const imageUrl = a.payload.val();
          const desciption = a.payload.val();
          return {id, title, price, category, imageUrl, desciption};
        });
      }));

  }

  get(productId){
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId){
    return this.db.object('/poducts/' + productId).remove();
  }

}
