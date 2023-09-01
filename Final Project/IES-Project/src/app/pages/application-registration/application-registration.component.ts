import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-registration',
  templateUrl: './application-registration.component.html',
  styleUrls: ['./application-registration.component.css']
})
export class ApplicationRegistrationComponent implements OnInit {

  applicantRegistrationform:FormGroup;
  name:string;

  constructor() { }

  ngOnInit(): void {
    this.applicantRegistrationform=new FormGroup({
      'fname':new FormControl('',[Validators.required]),
      'lname':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required]),
      
      
      'contact':new FormControl('',[Validators.required]),
      'adharno':new FormControl('',[Validators.required]),
      'plan':new FormControl('',[Validators.required])
      

    });

  }
  applicantRegistration(){

    console.log (this.applicantRegistrationform.value);
  }
  resetform(){
    this.applicantRegistrationform.reset();

  }

}
