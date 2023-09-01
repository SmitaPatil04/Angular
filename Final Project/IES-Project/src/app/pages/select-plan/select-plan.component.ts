import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent implements OnInit {
  selectplanform:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.selectplanform=new FormGroup({
      'caseId':new FormControl(),
      'firstnm': new FormControl(),
      'lastnm':new FormControl(),
      'plan':new FormControl(),
    });
  }


  createplanD(){
    console.log(this.selectplanform.value);
  }
}
