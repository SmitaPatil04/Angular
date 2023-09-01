import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {
  createplanform:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createplanform= new FormGroup({
      'plannm':new FormControl(),
      'plandesc':new FormControl(),
      'startdate':new FormControl(),
      'enddate':new FormControl(),
    });
  }
  createplanD(){
    console.log(this.createplanform.value);
  }
  resetform(){
    this.createplanform.reset();
  }

}
