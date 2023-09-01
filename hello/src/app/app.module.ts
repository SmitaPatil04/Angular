import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablepractComponent } from './tablepract/tablepract.component';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PractdirctComponent } from './practdirct/practdirct.component';
import { PractComponent } from './pract/pract.component';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TablepractComponent,
    TwowaybindComponent,
    DirectivesComponent,
    PractdirctComponent,
    PractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
