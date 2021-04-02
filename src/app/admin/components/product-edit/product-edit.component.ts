import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form:FormGroup;
  id:string;
  constructor(
    private formBuilder:FormBuilder,
    private productsService:ProductsService,
    private router:Router,
    private activeRoute:ActivatedRoute
    ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product =>{
        this.form.patchValue(product);
      });
    });
  }

  saveProduct(event:Event){
    event.preventDefault();
    console.log(this.form.value)
    if(this.form.valid){
      const product = this.form.value
      this.productsService.updateProduct(this.id,product)
      .subscribe(newproduct =>{
        console.log(newproduct)
        this.router.navigate(['/admin/products'])
      })
    }
  }
  private buildForm(){
    this.form = this.formBuilder.group({
      title:['',[Validators.required]],
      price: ['', [Validators.required,MyValidators.isPriceValid]],
      image:[''],
      description: ['',[Validators.required]]
    });
  }

  get priceField(){
    return this.form.get('price')
  }
}
