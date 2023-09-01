import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  marks:number=51;
  firstname="smi";
name:string="smita";
  constructor() { }

  ngOnInit(): void {
  }

}
