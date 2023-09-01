import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { ContainerComponent } from './Component/container/container.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ForgotPwdComponent } from './Pages/forgot-pwd/forgot-pwd.component';
import { UnlockUserComponent } from './Pages/unlock-user/unlock-user.component';
import { CheckEmailComponent } from './Pages/check-email/check-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    ForgotPwdComponent,
    UnlockUserComponent,
    CheckEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
