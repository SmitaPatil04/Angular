import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginform:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginform= new FormGroup(
      {
        'email':new FormControl('',[Validators.required]),
        'pwd':new FormControl('',[Validators.required]),
    });
  }

  login(data){
    console.log(this.loginform.value);
  }

}
