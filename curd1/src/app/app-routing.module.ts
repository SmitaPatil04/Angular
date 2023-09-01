import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [
  {
    path:'',component:ListemployeeComponent
  },
  {
    path:'create',component:CreateemployeeComponent
  },
  {
    path:'update/:id',component:UpdateemployeeComponent
  },
  {
    path:'view/:id',component:ViewemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
