import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './service/main.service';
import { AuthServiceService } from './auth/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'task';
  constructor(public service: MainService, public router: Router, public authService: AuthServiceService) { }
     
  ngOnInit(): void {
      //set username password in local storage
      localStorage.setItem('userName',"admin")
      localStorage.setItem('password',"12345")

      //get 
      this.authService.isAuthenticated = JSON.parse(localStorage.getItem('auth') || '');
      // this.service.cart = JSON.parse(localStorage.getItem('cartlist') || '')
      if (this.service.cart.length !== 0) {
        this.service.cart = JSON.parse(localStorage.getItem('cartlist') || '')
      }
  }
}
