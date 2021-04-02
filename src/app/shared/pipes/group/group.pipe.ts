import { Pipe, PipeTransform } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/product.model';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  product: Product[];

  constructor( private cartService: CartService){

  }

  transform(product: any, args?): any {
    var total = 0;
    this.cartService.cart$.subscribe(products =>{
      products.forEach((elemento)=>{
        if(elemento.id === product.id){
          total +=1;
        }
      })
    })
    return total;
  }

}
