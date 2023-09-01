import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private empservice:EmployeeService,
              private active:ActivatedRoute,
              ) { }

    id:number;
    employee:Employee= new Employee();
    viewemp(){
      this.empservice.viewemployee(this.id).subscribe(
        data=>{this.employee=data}
      );
    }
    

  ngOnInit(): void {
    this.active.params.subscribe(param=>{this.id=param.id});
    this.viewemp();
  }

}
