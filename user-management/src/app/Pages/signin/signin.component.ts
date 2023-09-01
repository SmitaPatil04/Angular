import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Signin } from 'src/app/Models/signin';
import { SigninuserService } from 'src/app/services/signinuser.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

userin:Signin=new Signin();
  signinform:FormGroup;

  constructor(private signinservice:SigninuserService) { }

  ngOnInit(): void {

    this.signinform=new FormGroup({
      'email':new FormControl(),
      'pwd':new FormControl()

    });
    


  }

  
  // signinuser(data:any){
  //   this.signinservice.signin(data).
  //   subscribe(resp=>{console.log(resp)});

  // }

}
