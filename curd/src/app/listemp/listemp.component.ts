import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {
  
  constructor(private serviceemp:EmployeeService,
    private active:ActivatedRoute,
    private route:Router) { }

    emps:any;
  getemp(){
    this.serviceemp.getallemp().
    subscribe(data=>{this.emps=data},
      err=>{console.log(err)});
    }


  id:number;
  emp:Employee= new Employee;

  deleteemp(id:any){

      this.serviceemp.deleteemp(id).subscribe();
      // console.log(id);
    }


  ngOnInit(): void {
    this.active.params.subscribe(param=> {this.id=param['id']});
    this.getemp();
  }

}
