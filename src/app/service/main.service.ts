import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  data = [
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
