import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../services/emp-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empserv:EmpServiceService) { }
 employee:any;

  
  ngOnInit(): void {
    this.empserv.getEmployee().subscribe(data=> {console.log(this.employee=data)},
    err=> {console.log(err)
  });
    

  }

}
