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
  val:String[] | undefined;

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'status', 'actions'];
  dataSource = new MatTableDataSource<UserData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }
 
  // fetchUsers() {
  //   this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe(users => {
  //       const userData: UserData[] = users.map(user => ({
  //         ...user,
  //         status: 'Active',
  //         isEditing: false
  //       }));
  //       this.dataSource.data = userData;
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //       console.log('Response from API:', users);
  //     });
  // }

  fetchUsers() {
    const apiKey = 'mRyxErxs4HvDS/eq5naK7liGplLDnjJn';  
    const apiUrl = `https://mapi.indiamart.com/wservce/crm/crmListing/v2/?glusr_crm_key=${apiKey}&start_time=07-Jun-202409:00:00&end_time=08-Jun-202423:00:00`;
  
    this.http.get<any[]>(apiUrl).subscribe({
      next: users => {
        const userData: UserData[] = users.map(user => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          status: 'Active',
          isEditing: false
        }));
        this.dataSource.data = userData;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log('Response from API:', users);
      },
      error: err => {
        console.error('Error fetching users:q', err);
       }
    });
  }


  
//   fetchUsers() {
//     const apiKey = 'mRyxErxs4HvDS/eq5naK7liGplLDnjJn';  
//     const apiUrl = `https://mapi.indiamart.com/wservce/crm/crmListing/v2/?glusr_crm_key=${apiKey}&start_time=07-Jun-202409:00:00&end_time=08-Jun-202423:00:00`;
  
//     this.http.get<any[]>(apiUrl).subscribe(
// response=>{
//           console.log('Response from API:', response);

//   this.val=response;
// }

//     );
//   }
  
  
  
  

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
