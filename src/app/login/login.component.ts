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

  login() {
       this.router.navigate(['/dashboard']);
    
  }
}
