import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-first-assignment',
  templateUrl: './first-assignment.component.html',
  styleUrls: ['./first-assignment.component.css']
})
export class FirstAssignmentComponent implements OnInit {


  celcious:number;
  // celcious=(ferh-32)*5/9;
  ferh:number;

  cfun(cel:NgForm){
    this.celcious= this.ferh*5/9;
    console.log(cel);
    
  }
ffun(fer:NgForm){
  this.ferh=this.celcious*9/5+32;
  console.log(fer);
}
  constructor() { }

  ngOnInit(): void {
  }

}
