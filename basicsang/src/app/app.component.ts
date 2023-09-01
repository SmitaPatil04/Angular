import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicsang';
  // marks:number=34;
  show='smi';
  data="smi";
  changedata(){
    this.data="hi...."
  }
}
