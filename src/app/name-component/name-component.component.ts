// import { Component } from '@angular/core';

// @Component({
//   moduleId: module.id,
//   selector: 'selector-name',
//   templateUrl: 'name.component.html'
// })

export class NameComponent {
  title = 'Cart Items';
  total: number = 0;
  items = [
    {name: 'item1', price: 1},
    {name: 'item2', price: 2}
  ];

  constructor() { 
    this.calculate();
  }

  calculate(){
    for(let x of this.items){
      this.total = this.total + x.price;       
    }
  }
}