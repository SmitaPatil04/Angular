import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {

  constructor(private activer:ActivatedRoute, //to capture id
    private empserv:EmployeeService,
    private route:Router) { }

  id:number;
  emp:Employee=new Employee();  //here we call the class where we define class empty obj

  ngOnInit(): void {
    this.activer.params.subscribe(param => {this.id=param.id}); //here we used activated routr obj

    this.getemp();
  }

  getemp(){                       //this function we write to display data when we redirect to udpate page
    this.empserv.viewemp(this.id).
    subscribe(data=>{this.emp=data},
      err=>{console.log(err)});
  }


  updatee(){
    this.empserv.createemp(this.emp).
    subscribe(data=>{
      console.log(data)
      this.route.navigate(['']),
      err=>{console.log(err)}
    }); //we call here the update function of service
  }


  
}
