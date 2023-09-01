import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  login:FormGroup;


  constructor() { }

  ngOnInit(): void {

    this.login=new FormGroup({
      'usernm': new FormControl(),
      'pwd': new FormControl()

    });
  }

  displaylg(){
    console.log(this.login.value);
  }

}
