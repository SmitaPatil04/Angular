import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name="smipatil";
  NAME="SMITU";
  currentdate= Date.now();
  rupee=400;
  student={name:"smi",batch:"Angular"}
  constructor() { }

  ngOnInit(): void {
  }
today=new Date
}
