import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  status: string;
  isEditing: boolean;
}

@Component({
  selector: 'app-accesspage',
  templateUrl: './accesspage.component.html',
  styleUrls: ['./accesspage.component.css']
})
export class AccesspageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'status', 'actions'];
  dataSource = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        const userData: UserData[] = users.map(user => ({
          ...user,
          status: 'Active',
          isEditing: false
        }));
        this.dataSource.data = userData;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

  editUser(user: UserData) {
    user.isEditing = true;
    console.log('clicked:',user.name);
  }

  saveUser(user: UserData) {
    user.isEditing = false;
  }


}
