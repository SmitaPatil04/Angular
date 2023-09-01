import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  marks:number=35;
  number=[1,2,3,4,5,6,7,8,9,10]
  ch=1;
  color="red";

  constructor() { }

  ngOnInit(): void {
  }

}
