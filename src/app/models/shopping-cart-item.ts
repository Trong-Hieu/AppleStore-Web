import { Product } from 'src/app/products';

export class ShoppingCartItem{
  // product: Product;
  // quantity: number;
  constructor(
    public product: Product,
    public quantity: number
  ){
    // this.product = product;
    // this.quantity = quantity;
  }

  get totalPrice(){
    return this.product.price * this.quantity;
  }

}

// export interface ShoppingCartItem{
//   product: Product;
//   quantity: number;
// }
