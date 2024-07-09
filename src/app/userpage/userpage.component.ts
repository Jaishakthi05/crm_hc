import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IndiaMartService, LeadData } from '../indiamart-lead.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['id', 'buyername', 'company', 'email', 'phone'];
  dataSource = new MatTableDataSource<LeadData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private indiamartLeadService: IndiaMartService) { }

  ngOnInit(): void {
    this.fetchLeads();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  fetchLeads() {
    this.indiamartLeadService.getLeads().subscribe(
      (data: LeadData[]) => {
        this.dataSource.data = data;
        console.log('Response from API:', data);
      },
      (error: any) => {
        console.error('Error fetching leads', error);
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
