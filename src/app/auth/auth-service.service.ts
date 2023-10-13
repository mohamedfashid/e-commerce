import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isAuthenticated: boolean = false;

 

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
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
