import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent implements OnInit {

  incomeDetailsform:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.incomeDetailsform= new FormGroup({
      'caseId':new FormControl(),
      'indname':new FormControl(),
      'isworking':new FormControl(),
      'otherinc':new FormControl(),
    });
  }

  incomeD(data){
    console.log(this.incomeDetailsform.value);
  }

}
