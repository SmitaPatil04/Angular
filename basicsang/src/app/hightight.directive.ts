import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHightight]'
})
export class HightightDirective {

  constructor( private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='yellow';
    
   }


}
