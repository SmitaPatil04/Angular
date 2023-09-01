import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormpractComponent } from './formpract/formpract.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FakeapiComponent } from './fakeapi/fakeapi.component';
import { HttpClientModule } from '@angular/common/http';
import { Udemyassignment2Component } from './udemyassignment2/udemyassignment2.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SqrtPipe } from './sqrt.pipe';
import { CollegeModule } from './college/college.module';
import { StudentModule } from './student/student.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Formbyanil1Component } from './formbyanil1/formbyanil1.component';
import { UserComponent } from './user/user.component';
import { User0Module } from './user0/user0.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    FormpractComponent,
    FakeapiComponent,
    Udemyassignment2Component,
    EmployeeComponent,
    AddEmpComponent,
    ReactiveformComponent,
    SqrtPipe,
    ParentComponent,
    ChildComponent,
    Formbyanil1Component,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CollegeModule,
    StudentModule,
    User0Module,
    UserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
