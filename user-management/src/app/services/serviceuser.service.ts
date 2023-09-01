import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {



  constructor( private httpclient:HttpClient) { }

  private baseurl="http://localhost:9090/";
  saveuser(data){
    return this.httpclient.post(this.baseurl+`saveUser`,data,{responseType:'text'});
  }

  getcountries(){
    return this.httpclient.get(this.baseurl+`countries`);
  }
  getstatebycountryid(id){
    return this.httpclient.get(this.baseurl+`states/${id}`);
  }
  getcitybystateid(id){
    return this.httpclient.get(this.baseurl+`cities/${id}`);
  }

}
