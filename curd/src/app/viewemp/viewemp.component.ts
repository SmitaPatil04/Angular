import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  constructor( private viewserv:EmployeeService,
    private active:ActivatedRoute) { }

id:number;
employee:Employee=new Employee();
  view(){
    this.viewserv.viewemp(this.id).subscribe(data=>{console.log(this.employee=data)});
    
  }
  ngOnInit(): void {
    this.active.params.subscribe(params=> {this.id=params['id']})
    // console.log(this.viewemp);
    this.view();
    
  }


}
