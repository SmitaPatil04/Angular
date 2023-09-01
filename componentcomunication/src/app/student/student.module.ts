import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudinfoComponent } from './studinfo/studinfo.component';



@NgModule({
  declarations: [StudinfoComponent],
  imports: [
    CommonModule
  ],
  exports:[StudinfoComponent]
  
})
export class StudentModule { }
