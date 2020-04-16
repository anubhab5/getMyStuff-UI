import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipse'
})
export class EllipsePipe implements PipeTransform {

  /*
  The pipe will be taking a string value and add ellipsis to the value after certain user provided characters
  eg-
  <p>{{description | EllipsePipe : 45}}</p>
  here if the description is more than 45 characters then eliipsis will be put after 45th character else not
  
  */
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
