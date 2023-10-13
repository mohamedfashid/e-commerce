import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  data: any[];

  constructor() {
    this.getProdList().subscribe((content) => {
      this.data = content;
      console.log(this.data)
    });
   }

  // dataUrl = '../assets/json file/data.json';
  // data:any = []

  getProdList(): Observable<any> {
    return of(this.products);    
  }


  products: any[] = [
    {
      id: 1,
      name:"product",
      price: 100,
      old: "200",
      img: "assets/img/img-products/product-7.png",
      sub: "sub",
      desc: "des",
      quantity: 1,
    },
    {
      id: 2,
      name:"product",
      price: 100,
      old: "200",
      img: "assets/img/img-products/product-8.png",
      sub: "sub",
      desc: "des",
      quantity: 1,
    },
    {
      id: 3,
      name:"product",
      price: 100,
      old: "200",
      img: "assets/img/img-products/product-9.png",
      sub: "sub",
      desc: "des",
      quantity: 1,
    },
    {
      id: 4,
      name:"product",
      price: 100,
      old: "200",
      img: "assets/img/img-products/product-10.png",
      sub: "sub",
      desc: "des",
      quantity: 1,
    },
    {
      id: 5,
      name:"product",
      price: 100,
      old: "200",
      img: "assets/img/img-products/product-11.png",
      sub: "sub",
      desc: "des",
      quantity: 1,
    },
    {
      id: 6,
      name:"product",
      price: 100,
      old: "200",
      img: "assets/img/img-products/product-12.png",
      sub: "sub",
      desc: "des",
      quantity: 1,
    },
    
  ]

  cart=[
    // {
    //   id: 1,
    //   name:"product",
    //   price: 100,
    //   old: "200",
    //   img: "assets/img/img-products/product-12.png",
    //   sub: "sub",
    //   desc: "des",
    //   quantity: 1,
    // },
    // {
    //   id: 1,
    //   name:"product",
    //   price: 100,
    //   old: "200",
    //   img: "assets/img/img-products/product-12.png",
    //   sub: "sub",
    //   desc: "des",
    //   quantity: 1,
    // },
    // {
    //   id: 1,
    //   name:"product",
    //   price: 100,
    //   old: "200",
    //   img: "assets/img/img-products/product-12.png",
    //   sub: "sub",
    //   desc: "des",
    //   quantity: 1,
    // },
  ]
}
