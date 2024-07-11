import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

import { UserpageComponent } from './userpage/userpage.component';
import { AccesspageComponent } from './accesspage/accesspage.component';
import { UserauthpageComponent } from './userauthpage/userauthpage.component';
import { ReportpageComponent } from './reportpage/reportpage.component';
import { CalltrackComponent } from './calltrack/calltrack.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard2', component: Dashboard2Component },
  { path: 'accesspage', component: AccesspageComponent },
  { path: 'calltrack', component: CalltrackComponent },

  { path: 'userauth', component: UserauthpageComponent },
  { path: 'reporting', component: ReportpageComponent },

  { path: 'userpage', component: UserpageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
