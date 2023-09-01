import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeapiService {

 

  constructor(private fapi:HttpClient) { }
  getdatafromapi(){
    return this.fapi.get("http://localhost:8080/employee/employees");
    // return this.fapi.get("")
    // this.fapi.get('https://jsonplaceholder.typicode.com/users').subscribe(data=>{
    //   this.users=data
  
  }
}
