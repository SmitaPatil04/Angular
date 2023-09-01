import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateempComponent } from './createemp/createemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteempComponent } from './deleteemp/deleteemp.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateempComponent,
    UpdateempComponent,
    ListempComponent,
    ViewempComponent,
    DeleteempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
