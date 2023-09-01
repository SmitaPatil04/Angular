import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateemployeeComponent,
    CreateemployeeComponent,
    ViewemployeeComponent,
    ListemployeeComponent,
    HeaderComponent
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
