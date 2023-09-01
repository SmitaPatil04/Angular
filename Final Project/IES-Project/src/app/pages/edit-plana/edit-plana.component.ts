import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-plana',
  templateUrl: './edit-plana.component.html',
  styleUrls: ['./edit-plana.component.css']
})
export class EditPlanaComponent implements OnInit {
  editplanform:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.editplanform= new FormGroup({
      'plannm':new FormControl(),
      'plandesc':new FormControl(),
      'startdate':new FormControl(),
      'enddate':new FormControl(),
    });
  }
  editplanD(){
    console.log(this.editplanform.value);
  }
  resetform(){
    this.editplanform.reset();
  }
}
