import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from '../products';

export class ShoppingCart{
  items: ShoppingCartItem[] = [];

  constructor(
    public itemsMap: { [productId: string]: ShoppingCartItem },
    //public items: ShoppingCartItem[],
  ){
    //this.items = items;
    for(let productId in itemsMap){
      let item = itemsMap[productId];
      this.items.push(new ShoppingCartItem(item.product, item.quantity));
      //console.log(this.items);
    }
  }

  // get productIds(){
  //   return Object.keys(this.items);
  // }

  // getQuantity(product: Product){
  //   console.log("product: " + product.id);

  //   let item = this.itemsMap[product.id];
  //   return item ? item.quantity : 0;

  // }
  get totalPrice(){
    let sum = 0;
    for (let productId in this.items){
      sum += this.items[productId].totalPrice;
    }
    return sum;
  }

  get totalItemsCount(){
    let count = 0;
    for (let productId in this.itemsMap)
      count += this.itemsMap[productId].quantity;
    return count;
    // for (let productId in this.items)
    //   count += this.items[productId].quantity;
    // return count;
  }

}

// export interface ShoppingCart{
//   items: ShoppingCartItem[]
// }
