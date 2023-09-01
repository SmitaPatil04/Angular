import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurl="http://localhost:8080/";

  getallemployee(){
   return  this.http.get(this.baseurl+"employee/employees");
  }

  createemployee(data:Employee){
    return this.http.post(this.baseurl+"employee/",data);
  }

  updateemployee(data:Employee,id){
    return this.http.put(this.baseurl+"employee/id/"+id,data);
  }

  viewemployee(id):Observable<Employee>{
    return this.http.get<Employee>(this.baseurl+"employee/id/"+id);
  }

  deleteemployee(id){
    return this.http.delete(this.baseurl+'employee/id/'+id);
  }







  constructor(private http:HttpClient) { }
}
