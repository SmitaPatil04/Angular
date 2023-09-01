import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office/office.component';
import { LibraryComponent } from './library/library.component';
import { StudentModule } from '../student/student.module';
import { CollegeComponent } from './college/college.component';



@NgModule({
  declarations: [OfficeComponent, LibraryComponent, CollegeComponent],
  imports: [
    CommonModule,
    StudentModule
  ],
  exports:[CollegeComponent]
})
export class CollegeModule { }
