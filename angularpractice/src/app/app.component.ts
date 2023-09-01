import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpractice';

  data="smi patil"
  data1=[
    {
    name:'smi',
    age:30,

  },
  {
    name:'saavi',
    age:12,

  },
  {
    name:'shubh',
    age:5,

  }
]
}
