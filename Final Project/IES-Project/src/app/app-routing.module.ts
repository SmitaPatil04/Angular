import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationRegistrationComponent } from './pages/application-registration/application-registration.component';
import { ChildDetailsComponent } from './pages/child-details/child-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreatePlanComponent } from './pages/create-plan/create-plan.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditPlanaComponent } from './pages/edit-plana/edit-plana.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { EditapplicationComponent } from './pages/editapplication/editapplication.component';
import { EducationalDetailsComponent } from './pages/educational-details/educational-details.component';
import { ForgetpwdComponent } from './pages/forgetpwd/forgetpwd.component';
import { IncomeDetailsComponent } from './pages/income-details/income-details.component';
import { LoginComponent } from './pages/login/login.component';
import { PlanRegistrationComponent } from './pages/plan-registration/plan-registration.component';
import { SelectPlanComponent } from './pages/select-plan/select-plan.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { ViewPlanComponent } from './pages/view-plan/view-plan.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { ViewapplicationComponent } from './pages/viewapplication/viewapplication.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'userRegistration',component:UserRegistrationComponent
  },
  {
    path:'viewUser',component:ViewUserComponent
  },
  {
    path:'editUser',component:EditUserComponent
  },
  {
    path:'applicantRegistration',component:ApplicationRegistrationComponent
  },
  {
    path:'viewApplication',component:ViewapplicationComponent
  },
  {
    path:'editApplication',component:EditapplicationComponent
  },
  {
    path:'planRegistration',component:PlanRegistrationComponent
  },
  {
    path:'selectPlan',component:SelectPlanComponent
  },
  {
    path:'viewPlan',component:ViewPlanComponent
  },
  {
    path:'editPlan',component:EditPlanaComponent
  },
  {
    path:'incomeDetails',component:IncomeDetailsComponent
  },
  {
    path:'childDetails',component:ChildDetailsComponent
  },
  {
    path:'educationalDetails',component:EducationalDetailsComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'forgetpwd',component:ForgetpwdComponent
  },
  {
    path:'createplan',component:CreatePlanComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
