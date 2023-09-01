import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablepract',
  templateUrl: './tablepract.component.html',
  styleUrls: ['./tablepract.component.css']
})
export class TablepractComponent implements OnInit {
  colsp:number=2;

  tbborder:number=5;

  fun(){
    console.log("hi...");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
