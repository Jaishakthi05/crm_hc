// indiamart.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndiaMartService {
  getLeads() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://api.indiamart.com';  

  constructor(private http: HttpClient) { }

   fetchLeads(apiKey: string): Observable<any> {
    const url = `${this.apiUrl}/leads`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}` // 
    });

    return this.http.get<any>(url, { headers });
  }
}
