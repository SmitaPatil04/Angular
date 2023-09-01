import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent implements OnInit {

  forgotpwdform:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.forgotpwdform=new FormGroup({
      'email':new FormControl('',[Validators.required])
    });
  }
  forgotpwd(){
    console.log(this.forgotpwdform.value);
  }

}
