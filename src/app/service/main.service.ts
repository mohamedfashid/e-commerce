import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // data: any[];

  constructor() {
    // this.getProdList().subscribe((content) => {
    //   this.data = content;
    //   console.log(this.data)
    // });
   }

  // dataUrl = '../assets/json file/data.json';
  // data:any = []

  getProdList(): Observable<any> {
    return of(this.products);    
  }


  products: any[] = [
    {
      id: 1,
      name:"Sofa",
      price: 9999,
      old: 15000,
      img: "assets/img/img-products/product-7.png",
      sub: "About the product",
      desc: "des",
      quantity: 1,
    },
    {
      id: 2,
      name:"Dinning Table",
      price: 17999,
      old: 20000,
      img: "assets/img/img-products/product-8.png",
      sub: "sub",
      desc: "des",
      quantity: 1,
    },
    {
      id: 3,
      name:"Cupboard",
      price: 11000,
      old: 15999,
      img: "assets/img/img-products/product-9.png",
      sub: "sub",
      desc: "des",
      quantity: 1,
    },
    {
      id: 4,
      name:"Table",
      price: 8999,
      old: 12999,
      img: "assets/img/img-products/product-10.png",
      sub: "sub",
      desc: "des",
      quantity: 1,
    },
    {
      id: 5,
      name:"Steele Shield",
      price: 6999,
      old: 13999,
      img: "assets/img/img-products/product-11.png",
      sub: "About the product",
      desc: "des",
      quantity: 1,
    },
    {
      id: 6,
      name:"Block",
      price: 999,
      old: 2999,
      img: "assets/img/img-products/product-12.png",
      sub: "About the product",
      desc: "des",
      quantity: 1,
    },
    
  ]

  cart=[
  ]
}
