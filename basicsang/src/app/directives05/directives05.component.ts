import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives05',
  templateUrl: './directives05.component.html',
  styleUrls: ['./directives05.component.css']
})
export class Directives05Component implements OnInit {

  property:string="red";
  image="https://media.istockphoto.com/photos/beautiful-happy-woman-enjoying-the-warm-sunlight-in-a-tropical-public-picture-id1296344118?s=612x612";
  image1="https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg"

cols:number=2;

  week=['sun','mon','tue','wed','thur','fri','sat']

  name:string="smi";
  color="red";
  a:number=10;
  b:number=20;
  c:number;
  add(){
   
    console.log("addition is",+( this.c=this.a+this.b));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
