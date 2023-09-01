import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { PlanRegistrationComponent } from './pages/plan-registration/plan-registration.component';
import { ViewPlanComponent } from './pages/view-plan/view-plan.component';
import { SelectPlanComponent } from './pages/select-plan/select-plan.component';
import { EditPlanaComponent } from './pages/edit-plana/edit-plana.component';
import { ApplicationRegistrationComponent } from './pages/application-registration/application-registration.component';
import { ViewapplicationComponent } from './pages/viewapplication/viewapplication.component';
import { EditapplicationComponent } from './pages/editapplication/editapplication.component';
import { ChildDetailsComponent } from './pages/child-details/child-details.component';
import { IncomeDetailsComponent } from './pages/income-details/income-details.component';
import { EducationalDetailsComponent } from './pages/educational-details/educational-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpwdComponent } from './pages/forgetpwd/forgetpwd.component';
import { CreatePlanComponent } from './pages/create-plan/create-plan.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    DashboardComponent,
    ViewUserComponent,
    EditUserComponent,
    PlanRegistrationComponent,
    ViewPlanComponent,
    SelectPlanComponent,
    EditPlanaComponent,
    ApplicationRegistrationComponent,
    ViewapplicationComponent,
    EditapplicationComponent,
    ChildDetailsComponent,
    IncomeDetailsComponent,
    EducationalDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    ForgetpwdComponent,
    CreatePlanComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
