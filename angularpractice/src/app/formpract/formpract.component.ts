import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formpract',
  templateUrl: './formpract.component.html',
  styleUrls: ['./formpract.component.css']
})
export class FormpractComponent implements OnInit {
  mailid='';
  pwd='';

  logindata(data){
    console.log(data.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
