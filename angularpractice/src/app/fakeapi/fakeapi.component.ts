import { Component, OnInit } from '@angular/core';
import { FakeapiService } from '../services/fakeapi.service';

@Component({
  selector: 'app-fakeapi',
  templateUrl: './fakeapi.component.html',
  styleUrls: ['./fakeapi.component.css']
})
export class FakeapiComponent implements OnInit {
  

  emp:any;

  constructor(private apif:FakeapiService) { }

  getdatafromapi(){
    this.apif.getdatafromapi().subscribe(data =>console.log(this.emp=data),err=> console.log('error'+err));
    // console.log(this.emp);
  }

  ngOnInit(): void {
    
  this.getdatafromapi();
    
  }

}
