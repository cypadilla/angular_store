import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/order.model';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = []
  private cart = new BehaviorSubject<Product[]>([])

  cart$ = this.cart.asObservable();
  constructor() { }

  orders: Order[] = [];

  addCart(product: Product){
    this.products = [...this.products, product]
    this.cart.next(this.products)
  }

  addOrder(amount:number,product:Product){
    const orden : Order =  {
      amount: amount,
      product: product
    }
    this.orders = [...this.orders, orden]
    console.log(this.orders)
  }


  
}
