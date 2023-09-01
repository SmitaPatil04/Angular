import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor(private empservice:EmployeeService,
    private route:Router) { }

  employees:any;
  employee:Employee= new Employee();
  createemp(){
    this.empservice.createemployee(this.employee).subscribe(
      data=>{this.employees=data
      this.route.navigate([''])});
  }
  id:number;
  getemp(){
    this.empservice.viewemployee(this.id).subscribe(
      data=>{this.employees=data},
      err=>{console.log(err)}
    );
  }

  ngOnInit(): void {
    this.getemp();

  }

}
