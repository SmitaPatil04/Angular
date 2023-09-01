import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  constructor( private empservice:EmployeeService,
    private activate:ActivatedRoute) { }

  employees:any;
  getallemp(){
    this.empservice.getallemployee().subscribe(
      data=>{this.employees=data},
      err=>{console.log(err)});
  }

  id:number;
  deleteemp(id:any){
    this.empservice.deleteemployee(id).subscribe();
  }


  ngOnInit(): void {
    this.activate.params.subscribe(param=>{this.id=param.id});
    this.getallemp();

  }

}
