import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {

  childDetailsform:FormGroup;
  name:string;
  constructor() { }

  ngOnInit(): void {
    this.childDetailsform= new FormGroup({
      'caseId':new FormControl('',[Validators.required]),
      'indname':new FormControl('',[Validators.required]),
      'childnm':new FormControl('',[Validators.required]),
      'gender':new FormControl('',[Validators.required]),
      
      'adharno' :new FormControl(null,[Validators.required,Validators.maxLength(12),Validators.minLength(12)]),
    });
  }
  childD(){
    console.log(this.childDetailsform.value);
  }
  resetform(){
    this.childDetailsform.reset();
  }
}

