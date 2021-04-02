import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { MaterialModule } from 'src/app/material/material.module';
import { Product } from 'src/app/product.model';
import { SharedModule } from 'src/app/shared/shared.module';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['title','image', 'total'];

  products$: Observable<Product[]>;

  constructor(private cartService:CartService) {
    this.products$ = this.cartService.cart$.pipe(map((products:[]) =>{
      const newProducts = [...new Set(products)];
      return newProducts;
    }))
   }

  ngOnInit(): void {
  }

}
