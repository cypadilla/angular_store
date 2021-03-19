import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'

import {ProductsService} from '../../../core/services/products.service';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(
    private route: ActivatedRoute,
    private poductsService:ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      const id = params.id;
      console.log(id);
      this.fetchProduct(id)
      
    });
  }

  fetchProduct(id:string){
    this.poductsService.getProduct(id).subscribe( product => {
      console.log(product)
      this.product = product
    });
  }

}
