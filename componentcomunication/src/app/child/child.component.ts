import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  parentchild:string;

  @Output()
  childparent=new EventEmitter();
  msg:string='Yes dad'

  constructor() { }
  childtparentmsg(){
    this.childparent.emit(this.msg);
  }

  ngOnInit(): void {
  }

}
