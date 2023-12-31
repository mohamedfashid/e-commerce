import { Component } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthServiceService, private router: Router, private fb: FormBuilder) {
    this.logInFormGroup = this.fb.group({
      username: ["admin", Validators.required],
      password: ["12345", Validators.required],
    });
  }
  logInFormGroup: FormGroup;
  login(): void {
    const username = this.logInFormGroup.value.username;
    const password = this.logInFormGroup.value.password;
    console.log(this.authService.login(username, password))

    if (this.authService.login(username, password)) {
      this.router.navigate(['/home']);

      localStorage.setItem('auth', JSON.stringify(this.authService.login(username, password)))

    } else {
      console.log("test" + this.authService.login(username, password))
      alert("Username and Password")
      this.router.navigate(['/login']);
  }
 }
}
