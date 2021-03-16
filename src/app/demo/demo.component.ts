import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  
  items: Array<any> = [1,2,4,5,10 ];
  power = 10;
  title = 'platzi-stor';
  constructor() { }

  ngOnInit(): void {
  }

 
  addItem(){
    this.items.push('Nuevo item');
  }
  deleteItem(index:number){
    this.items.splice(index,1)
  }

}
