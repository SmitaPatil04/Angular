import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-studinfo',
  templateUrl: './studinfo.component.html',
  styleUrls: ['./studinfo.component.css']
})
export class StudinfoComponent implements OnInit {
  @Input()
  studentinfo:string;

  constructor() { }

  ngOnInit(): void {
  }

}
