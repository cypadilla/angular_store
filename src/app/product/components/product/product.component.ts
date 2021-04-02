import {
     Component,
     Input,
     Output,
     EventEmitter,
     OnChanges,
     SimpleChanges, 
     OnInit, 
     DoCheck, 
     OnDestroy
    } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

import {Product} from '../../../product.model';
@Component({
  selector: 'app-product',
  templateUrl : './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements DoCheck, OnInit,OnDestroy{

  @Input() product: Product;
  @Output()productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date;
  
  constructor(private cartService:CartService){
      console.log('1.se ejecuto el constructor')
  }

//   ngOnChanges(changes:SimpleChanges){
//       console.log('2.changes')
//       console.log(changes)
//   }

  ngOnInit(){
      // console.log('3.ngOnInit')
  }

  ngDoCheck(){
    // console.log('DOcheck')
  }
    
  ngOnDestroy(){
      console.log('OnDestroy')
  }
  addCart(): void{
    console.log('añadido al carrito');
    this.cartService.addCart(this.product)
    // this.productClicked.emit(this.product.id);
    }
}
