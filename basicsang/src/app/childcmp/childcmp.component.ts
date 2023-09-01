import { Component, Input, OnInit ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-childcmp',
  templateUrl: './childcmp.component.html',
  styleUrls: ['./childcmp.component.css']
})
export class ChildcmpComponent implements OnInit {

  constructor() { }

  ngOnChanges(){
    console.warn('changes are \t'+this.data)

  }

  ngOnInit(): void {
  }
  
  @Input() public data;

}
