import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html',
  styleUrls: ['./createemp.component.css']
})
export class CreateempComponent implements OnInit {

  constructor(private creemp:EmployeeService,
    private route:ActivatedRoute,
    private nav:Router) { }
  cre:any;
  id:number;
  emp:Employee=new Employee();

  create(){
    this.creemp.createemp(this.emp).
    subscribe(data=>{this.cre=data,
      this.nav.navigate([''])},
    err=>{console.log(err)});
  }
  getemp(){                       //this function we write to display data when we redirect to udpate page
    this.creemp.viewemp(this.id).
    subscribe(data=>{this.emp=data},
      err=>{console.log(err)});
  }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{this.id=param.id});
    this.getemp();
    

  }

}
