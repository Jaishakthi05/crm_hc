// userpage.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IndiaMartService } from './indiamart.service'; // Import IndiaMartService

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  // Add more fields as per your API response
}

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];
  dataSource = new MatTableDataSource<UserData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private http: HttpClient,
    private indiamartService: IndiaMartService // Inject IndiaMartService
  ) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.fetchUsers();
  } 

  fetchUsers() {
    const apiKey = 'your_api_key_here'; // Replace with your actual IndiaMART API key
    this.indiamartService.fetchLeads(apiKey)
      .subscribe(
        users => {
          this.dataSource.data = users; // Assuming the API response is directly an array of UserData
          this.dataSource.paginator = this.paginator; // Set paginator after setting data source
          console.log('Response from IndiaMART API:', users); // Logging the response data
        },
        error => {
          console.error('Error fetching leads:', error);
        }
      );
  }

  applyFilter(input: HTMLInputElement) {
    const filterValue = input.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
