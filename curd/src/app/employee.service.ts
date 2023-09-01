import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpc:HttpClient) { }
  baseurl="http://localhost:8080/";
 
  getallemp(){
    // return this.httpc.get("http://localhost:8080/employee/employees");
    return this.httpc.get(this.baseurl +'employee/employees');
  }
  createemp(data:Employee){
    return this.httpc.post(this.baseurl+'employee/',data);
  }
  updateemp(data:Employee,id){
    return this.httpc.put(this.baseurl+'employee/' +id ,data);
  }
  deleteemp(id){
    return this.httpc.delete("http://localhost:8080/employee/id/"+id,{responseType:'text'});
  }
  viewemp(id):Observable<Employee>{
    return this.httpc.get<Employee>("http://localhost:8080/employee/id/"+id)
  }

}
