import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeModule } from './college/college.module';
import { StudentModule } from './student/student.module';
// import { FamilyModule } from './family/family.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SpracticeComponent } from './spractice/spractice.component';
import { College1Module } from './college1/college1.module';
import { Student1Module } from './student1/student1.module';
import { MomComponent } from './mom/mom.component';
import { DaughterComponent } from './daughter/daughter.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SpracticeComponent,
    MomComponent,
    DaughterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollegeModule,
    StudentModule,
   College1Module,
   Student1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
