import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckEmailComponent } from './Pages/check-email/check-email.component';
import { ForgotPwdComponent } from './Pages/forgot-pwd/forgot-pwd.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { UnlockUserComponent } from './Pages/unlock-user/unlock-user.component';

const routes: Routes = [
  {
    // path:'',component:SigninComponent
  },
  {
    // path:'signin',component:SigninComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'forgotpwd',component:ForgotPwdComponent
  },
  {
    path:'unlockuser',component:UnlockUserComponent
  },
  {
    path:'checkemail',component:CheckEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
