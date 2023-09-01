import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formbyanil1',
  templateUrl: './formbyanil1.component.html',
  styleUrls: ['./formbyanil1.component.css']
})
export class Formbyanil1Component implements OnInit {

  constructor() { }
  getdata(value){
    console.log(value);
  }

  ngOnInit(): void {
  }

}
