import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isAuthenticated : boolean = false;

 

  logout(): void {
    this.isAuthenticated = false;
  }
  login(username: string, password: string) {
    const existingUsername = localStorage.getItem('userName');
    const existingPassword = localStorage.getItem('password');
    if(username == existingUsername && password == existingPassword)
    this.isAuthenticated = true
    else
    this.isAuthenticated = false

    return this.isAuthenticated;
  }
  // login(username: string, password: string): Observable<boolean> {
  //   const existingUsername = localStorage.getItem('userName');
  //   const existingPassword = localStorage.getItem('password');
  //   // if(username == existingUsername && password == existingPassword)
  //   // this.isAuthenticated = true
  //   // else
  //   // this.isAuthenticated = false
  //   this.isAuthenticated = username == existingUsername && password == existingPassword
  //   console.log(this.isAuthenticated);

  //   return of(this.isAuthenticated);
  // }
  // login(username: string, password: string): Observable<boolean> {
  //   const existingUsername = localStorage.getItem('userName');
  //   const existingPassword = localStorage.getItem('password');
  //   // if(username == existingUsername && password == existingPassword)
  //   // this.isAuthenticated = true
  //   // else
  //   // this.isAuthenticated = false
  //   this.isAuthenticated = username == existingUsername && password == existingPassword
  //   console.log(this.isAuthenticated);

  //   return of(this.isAuthenticated);
  // }
  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}
