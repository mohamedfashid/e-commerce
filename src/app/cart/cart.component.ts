import { Component, Input } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public service:MainService){}

  recieved = [];

  data:any [];

  @Input('data')
  set dataSet(data) {
    this.recieved = [...this.recieved, 'Setter got a value'];
    this.data = data;
  }

  del(item:any) {
    this.data.splice(item, 1);
    console.log(item)
  }

  decrease(prod:any){
    if (prod.quantity > 1) {
      prod.quantity -= 1;
      console.log(prod.quantity)
    }
    else{
      prod.quantity = 1;
    }
  }

  increase(prod:any){
    if(prod.quantity < 5){
      prod.quantity += 1;
      console.log(prod.quantity)
    }
    else{
    }
  }

  getSingleTotal(n:any){
    let singleTotal = 0;
      if (this.service.cart[n].price) {
        singleTotal += this.service.cart[n].price * this.service.cart[n].quantity;
      }
      return singleTotal;
  }

  totalamount : number = 0

  getTotal(){
    let total = 0;
      for (var i = 0; i < this.service.cart.length; i++) {
          if (this.service.cart[i].price) {
              total += this.service.cart[i].price * this.service.cart[i].quantity;
              this.totalamount = total;
          }
      }
      return total;
  }

}
