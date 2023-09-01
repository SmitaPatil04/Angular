import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {
  eduDetailsform:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.eduDetailsform=new FormGroup({
      'caseId':new FormControl('',[Validators.required]),
      'indname':new FormControl('',[Validators.required]),
      'hqualification':new FormControl('',[Validators.required]),
      'compyear':new FormControl('',[Validators.required]),
      'grade':new FormControl('',[Validators.required]),

    });
  }
  educationalD(data){
    console.log(this.eduDetailsform.value);
  }

}
