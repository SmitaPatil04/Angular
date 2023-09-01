import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './user0/login/login.component';
import { SignupComponent } from './user0/signup/signup.component';

const routes: Routes = [
//   {
//   path:'add employee',component:AddEmpComponent
// },
// {
//   path:'',component:EmployeeComponent
// }
{
  path:'login',component:LoginComponent
},
{
  path:'signup',component:SignupComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
