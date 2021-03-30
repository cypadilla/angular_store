import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsService } from 'src/app/core/services/products.service';
import { ListProductsDataSource, ListProductsItem } from './list-products-datasource';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit{
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatTable) table!: MatTable<ListProductsItem>;
  // dataSource: ListProductsDataSource;
  products = []
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {
    // this.dataSource = new ListProductsDataSource();
  }

  ngOnInit(){
    this.fetchProducts();
  }

  // ngAfterViewInit(): void {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products
    })
  }

  deleteProducts(id:string){
    this.productsService.deleteProduct(id)
    .subscribe(res => {
      if(res){
        console.log(res)
      const index = this.products.findIndex(product => product.id === id)
      this.products.splice(index,1);
      alert(`EL PRODUCTO ha sido eliminado correctamente` )
      this.products = [...this.products];
      }else{
        console.log('no fue eliminado correctamente')
      } 
    });
  }
}
