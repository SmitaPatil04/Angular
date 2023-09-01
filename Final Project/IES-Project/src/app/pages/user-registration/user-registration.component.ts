import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  name:string;

  userRegistrationform:FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.userRegistrationform=new FormGroup({
      'fname':new FormControl('',[Validators.required]),
      'lname':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required]),
      'dob':new FormControl('',[Validators.required]),
      'gender':new FormControl('',[Validators.required]),
      'contact':new FormControl('',[Validators.required]),
      'adharno':new FormControl('',[Validators.required])
      

    });
  }

  userRegistration(){
    console.log(this.userRegistrationform.value);

  }
  resetform(){
    this.userRegistrationform.reset();
  }

}
