import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editapplication',
  templateUrl: './editapplication.component.html',
  styleUrls: ['./editapplication.component.css']
})
export class EditapplicationComponent implements OnInit {

  editapplicantform:FormGroup
 name:string;
  constructor() { }

  ngOnInit(): void {

    this.editapplicantform=new FormGroup({
      'fname':new FormControl('',[Validators.required]),
      'lname':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required]),
      
      
      'contact':new FormControl('',[Validators.required]),
      'adharno':new FormControl('',[Validators.required])
    });
  }
editapplicant(){
  console.log(this.editapplicantform.value);
}
resetform(){
 this.editapplicantform.reset();
}
}
