import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateempComponent } from './createemp/createemp.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';

const routes: Routes = [
  {
    path:'',component:ListempComponent
  },
  {
    path:'update/:id',component:UpdateempComponent
  },
  {
    path:'view/:id',component:ViewempComponent
  },
  {
    path:'create',component:CreateempComponent
  },
  {
    path:'delete/:id',component:ListempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
