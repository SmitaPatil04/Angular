import { BrowserModule } from '@angular/platform-browser';
import { Directive, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablepractComponent } from './tablepract/tablepract.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Directives05Component } from './directives05/directives05.component';
import { AttributepractComponent } from './attributepract/attributepract.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { FirstAssignmentComponent } from './first-assignment/first-assignment.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
import { PracticeComponent } from './practice/practice.component';
import { MarksComponent } from './marks/marks.component';
import { SqrtPipe } from './sqrt.pipe';
import { HightightDirective } from './hightight.directive';
import { ChildcmpComponent } from './childcmp/childcmp.component';
import { CustpipePipe } from './custpipe.pipe';
import { RedelDirective } from './redel.directive';

@NgModule({
  declarations: [
    AppComponent,
    TablepractComponent,
    DirectivesComponent,
    Directives05Component,
    
    AttributepractComponent,
    
    PipesComponent,
    
    FirstAssignmentComponent,
    
    Reactiveform1Component,
    
    PracticeComponent,
    
    MarksComponent,
    
    SqrtPipe,
    
    HightightDirective,
    
    ChildcmpComponent,
    
    CustpipePipe,
    
    RedelDirective
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
