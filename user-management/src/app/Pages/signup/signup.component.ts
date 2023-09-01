import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Signup } from 'src/app/Models/signup';
import { ServiceuserService } from 'src/app/services/serviceuser.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup:Signup=new Signup(); //declare the module(class)

  signupform:FormGroup;


  constructor( private signupservice:ServiceuserService) { }

  ngOnInit(): void {
    this.signupform=new FormGroup({
      
      'signup.cityId': new FormControl(),
      'signup.countryId': new FormControl(),
      'signup.dob': new FormControl(),
      'signup.email': new FormControl(),
      'signup.fname': new FormControl(),
      'signup.gender': new FormControl(),
      'signup.lname': new FormControl(),
      'signup.phno': new FormControl(),
      'signup.stateId': new FormControl()
    });

    // this.signupuser(this.user.value);

    this.getcountries();
  }



  states:any;
  getstatebycountryid(countryId:number){
    this.signupservice.getstatebycountryid(countryId).subscribe(
      data=>{this.states=data,
       console.log(this.states)}
      ,err=>{console.log(err)});
  }

 cities:any;
 getcitybystateid(stateId:number){
  this.signupservice.getcitybystateid(stateId).subscribe(
    data=>{this.cities=data,
    console.log(this.cities)});
 }


  countries:any;

  getcountries(){
    this.signupservice.getcountries().subscribe(data=>{this.countries=data, console.log(this.countries)},
      err=>{console.log(err)});
  }

  signupuser(){
    this.signupservice.saveuser(this.signupform.value).subscribe(data=>{console.log(data)});
  }

}
