import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudinfoComponent } from './studinfo/studinfo.component';
import { StudacademicsComponent } from './studacademics/studacademics.component';
import { StudentComponent } from './student/student.component';



@NgModule({
  declarations: [StudinfoComponent, StudacademicsComponent, StudentComponent],
  imports: [
    CommonModule
  ],
  exports:[StudentComponent]
})
export class StudentModule { }
