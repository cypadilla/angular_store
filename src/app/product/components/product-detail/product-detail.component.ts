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
    private productsService:ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      const id = params.id;
      console.log(id);
      this.fetchProduct(id)
      
    });
  }

  fetchProduct(id:string){
    this.productsService.getProduct(id).subscribe( product => {
      console.log(product)
      this.product = product
    });
  }

  createProduct(){
    const newProduct: Product = {
      id : '222',
      title: 'imagen',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct:Partial<Product> = {
      price: 50000,
      description: 'viejo producto'
    };
    this.productsService.updateProduct('222',updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct('222')
    .subscribe(product => {
      console.log(product);
    });
  }
}
