import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  edituserform:FormGroup
  name:string
  constructor() { }

  ngOnInit(): void {
    this.edituserform=new FormGroup({
      'fname':new FormControl('',[Validators.required]),
      'lname':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required]),
      'dob':new FormControl('',[Validators.required]),
      'gender':new FormControl('',[Validators.required]),
      'contact':new FormControl('',[Validators.required]),
      'adharno':new FormControl('',[Validators.required])
    })

  }
  edituser(){
    console.log(this.edituserform.value);
  }
resetform(){
  this.edituserform.reset();
}

}
