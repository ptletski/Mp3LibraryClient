import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
