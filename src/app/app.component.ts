import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './service/main.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'task';
  constructor(public service: MainService, public router: Router) { }
     
  ngOnInit(): void {
      //set username password in local storage
      localStorage.setItem('userName',"Fashid")
      localStorage.setItem('password',"12345")
  }
}
