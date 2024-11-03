import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input type="text" [(ngModel)]="username" placeholder="Username">
      <input type="password" [(ngModel)]="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const customerData = { username: this.username, password: this.password };
    this.loginService.login(customerData).subscribe(response => {
      if (response === 'Login successful') {
        // Redirect to protected route or display success message
      } else {
        console.error('Invalid username or password');
      }
    });
  }

}