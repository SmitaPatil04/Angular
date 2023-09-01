import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-spractice',
  templateUrl: './spractice.component.html',
  styleUrls: ['./spractice.component.css']
})
export class SpracticeComponent implements OnInit {

  constructor(private add:CalculatorService) { }
  tot:number=0;
  showadd(){
    this.tot=this.add.addition(2,2);
    console.log(this.tot);
  }

  ngOnInit(): void {
  }

}
