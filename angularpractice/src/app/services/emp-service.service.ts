import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private emp:HttpClient) { }

  getEmployee(){
   return this.emp.get("http://localhost:8080/employee/employees");
  }
  createEmp(data){
    // const data ={
      
    //     'firstName':'smita',
    //     'lastName': 'patil',
    //     'salary': 152500
    //     }
          return this.emp.post(" http://localhost:8080/employee/",data)
    
  

    // return this.emp.post("http://localhost:8080/employee/" ,+this.emp);
  }
}
