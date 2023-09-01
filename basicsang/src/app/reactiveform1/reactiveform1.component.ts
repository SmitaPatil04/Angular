import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform1',
  templateUrl: './reactiveform1.component.html',
  styleUrls: ['./reactiveform1.component.css']
})
export class Reactiveform1Component implements OnInit {

  constructor() { }

  login:FormGroup;

  addform(){
    console.log(this.login.value);
  }

  resetform(){
    this.login.reset();
  }
  defaultform(){
    const data={
      'username':'smipatil',
      'password':'smitu'
    }
    this.login.setValue(data);
  }

  ngOnInit(): void {
    this.login= new FormGroup({
      'username': new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z 0-9 @ $] +$'),Validators.minLength(4)]),
      'password':new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z 0-9 @ $] +$'),Validators.minLength(4)]),
    });
  }

}
