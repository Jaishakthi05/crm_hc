import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string | undefined;
  public password: string | undefined;

  constructor(private router: Router) {}


  login(username: string, password: string) {
     if (username === 'admin' && password === '123') {
       this.router.navigate(['/dashboard']);  
    } 
    else if(username !== 'admin' && password === '123'){
      alert('welcome user');
      this.router.navigate(['/dashboard2']);  
    }else {
      alert('Invalid Username or Password!!' );
       console.log('Login failed!');
    }
  }
  
}
