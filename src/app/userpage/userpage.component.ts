import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<UserData[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this.dataSource.data = users;
        this.dataSource.paginator = this.paginator;  
        console.log('Response from API:', users);  
      });
  }

  applyFilter(input: HTMLInputElement) {
    const filterValue = input.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
