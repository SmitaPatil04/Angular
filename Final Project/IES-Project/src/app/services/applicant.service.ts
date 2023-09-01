import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http:HttpClient) { }

  baseurl='localhost:9999/user/';

  applicantreg(data){
    return this.http.post(this.baseurl+'applicationRegistration',data,{responseType:'text'});
  }



}
