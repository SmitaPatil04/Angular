import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-deleteemp',
  templateUrl: './deleteemp.component.html',
  styleUrls: ['./deleteemp.component.css']
})
export class DeleteempComponent implements OnInit {
id:number
  constructor(private delemp:EmployeeService,
    private route:ActivatedRoute) { }
  // dele:any;
  // deleteemp(id){
  //   this.delemp.deleteemp(this.id).
  //   subscribe(data=>{this.dele=data},
  //     err=>{console.log(err)});
  // }


  ngOnInit(): void {
  //   this.route.params.subscribe(params=>{this.id=params.id});
  //  this.dele.listemp();
    
  }


}
