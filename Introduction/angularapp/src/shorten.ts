import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'shorten'

})
export class Shorten implements PipeTransform {
  transform(value: string): string {
    if (value.length > 20) {
    return value.substring(0,20) + '...'
    }
    return value;
  }
}
