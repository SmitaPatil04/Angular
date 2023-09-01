import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signin } from '../Models/signin';

@Injectable({
  providedIn: 'root'
})
export class SigninuserService {

  constructor( private httpclient:HttpClient) { }

  baseurl="http://localhost:9090/";

  // signin(data){
  //  return this.httpclient.post(this.baseurl+`login`,data,{responseType:'text'});
  // }
}
