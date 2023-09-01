import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  salary=50000;
  age=17;
  n:number=33;
  days=['sun','mon','tue','wed','thur','fri','sat']
  leapyr=[2000,2004,2008,2012,2016,2020]
  choice=1;
 bill=6000

  constructor() { }

  ngOnInit(): void {
  }

}
