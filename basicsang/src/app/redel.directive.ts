import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appRedel]'
})
export class RedelDirective {

  constructor(eref:ElementRef) { 
    eref.nativeElement.style.color="red";
  }

}
