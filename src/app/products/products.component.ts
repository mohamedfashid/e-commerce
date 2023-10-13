import { Component, } from '@angular/core';
import { MainService } from '../service/main.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  data: any[];
  constructor(public service: MainService) { }

  add(item: any) {
    let itemExists = false;

    for (let i = 0; i < this.service.cart.length; i++) {
      if (item.id === this.service.cart[i].id) {
        itemExists = true;
        break; // Exit the loop once a matching item is found
      }
    }

    if (!itemExists) {
      this.service.cart.push(item);
      console.log(item);
    }

    // localStorage.setItem('cartlist', JSON.stringify(this.service.cart))
  }

  ngOnInit(): void {
    this.service.getProdList().subscribe((content) => {
      this.data = content;
      console.log(this.data)
    });
  }
}
