import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipe'
})
export class CustpipePipe implements PipeTransform {

  transform(value:number): number{
    return Math.pow(value,value);
  }

}
