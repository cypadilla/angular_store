import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [

  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'create',
        component:ProductFormComponent
      },
      {
        path:'list-products',
        component:ListProductsComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'products/create',
        component:FormProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
