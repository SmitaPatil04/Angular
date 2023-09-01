import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeComponent } from './college/college.component';
import { Student1Module } from '../student1/student1.module';



@NgModule({
  declarations: [CollegeComponent],
  imports: [
    CommonModule,
    Student1Module
  ]
})
export class College1Module { }
