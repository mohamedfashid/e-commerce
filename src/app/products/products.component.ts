import { Component, } from '@angular/core';
import { MainService } from '../service/main.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(public service:MainService){}

  add(item:any) {
    this.service.cart.push(item)
    console.log(item)
  }

}
