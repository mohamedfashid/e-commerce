import { Component, } from '@angular/core';
import { MainService } from '../service/main.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // items: any[];
  constructor(public service:MainService){}

  add(item:any) {
    this.service.cart.push(item)
    console.log(item)
  }

  // ngOnInit(): void {
  //   this.service.getProdList().subscribe((data) => {
  //     this.items = data;
  //     console.log(this.items)
  //   });
  // }
}
