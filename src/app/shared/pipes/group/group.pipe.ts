import { Pipe, PipeTransform } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Order } from 'src/app/order.model';
import { Product } from 'src/app/product.model';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  product: Product[];
  order: Order[];
  constructor( private cartService: CartService){

  }

  transform(product: Product): any {
    var total = 0;
    this.cartService.cart$.subscribe(products =>{
      products.forEach((elemento)=>{
        if(elemento.id === product.id){
          total +=1;   
        }
        this.cartService.addOrder(total,product);
      })
    })
    return total;
  }

}
