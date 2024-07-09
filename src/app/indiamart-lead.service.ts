// indiamart.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndiaMartService {
  private apiUrl = 'https://api.indiamart.com'; // Example API base URL

  constructor(private http: HttpClient) { }

  // Method to fetch leads
  fetchLeads(apiKey: string): Observable<any> {
    const url = `${this.apiUrl}/leads`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}` // Assuming Bearer token authorization
    });

    return this.http.get<any>(url, { headers });
  }
}
