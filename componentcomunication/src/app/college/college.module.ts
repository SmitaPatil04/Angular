import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClginfoComponent } from './clginfo/clginfo.component';
import { StudentModule } from '../student/student.module';



@NgModule({
  declarations: [ClginfoComponent],
  imports: [
    CommonModule,
    StudentModule
  ],
  exports:[ClginfoComponent]
  
})
export class CollegeModule { }
