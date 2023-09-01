import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  constructor(private active:ActivatedRoute,
              private empservice:EmployeeService,
              private route:Router ) { }

  id:number;      //we take this from our module(class employee)

  employee:Employee = new Employee();  //this is used to access the fields(firstname,lastname,salary) of class
  
  ngOnInit(): void {
   
    this.active.params.subscribe(param=>{this.id=param.id});  //to get id from the table
    this.getemp(); //we call it bcz when we go on update data will be there in fields
  }

  updateemployee(){
    this.empservice.updateemployee(this.employee,this.id).subscribe(
      data=>{console.log(data)
      this.route.navigate([''])
      });


  }

  getemp(){
     //this function we write bcz we want the data in field when we click on update nd redirect on update form
    this.empservice.viewemployee(this.id).subscribe(
      data=>{this.employee=data},
      err=>{console.log(err)}
    );
  }

}
