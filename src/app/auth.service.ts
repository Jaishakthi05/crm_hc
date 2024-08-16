import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'   
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/authenticate';   

  constructor(private http: HttpClient) {}

  // Method to handle user login
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password })
      .pipe(
        map(user => {
          if (user && user.token) {
            // Store user details and JWT token in local storage
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        })
      );
  }

  // Method to handle user logout
  logout(): void {
    // Remove user from local storage
    localStorage.removeItem('currentUser');
  }
}
