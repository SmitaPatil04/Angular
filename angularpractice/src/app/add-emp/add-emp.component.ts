import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpServiceService } from '../services/emp-service.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  firstName:string;
  lastName:string;
  salary:number

  constructor(private addemp:EmpServiceService) { }
  
  

  ngOnInit(): void {

  }
  
  addEmployee(formval:NgForm){
    const data ={
          'firstName':formval.value.firstName,
          'lastName': formval.value.lastName,
          'salary':formval.value.salary
          }
    this.addemp.createEmp(data).subscribe(data =>console.log(data));
    console.log('data saved');
    
  }

}
