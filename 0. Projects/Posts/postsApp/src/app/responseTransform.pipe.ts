import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'response-transform',
})
export class TransformResponse implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let keyNames = Object.keys(value);

    let postsData = keyNames.map((kname) => {
      return {
        ...value[kname],
        id: kname,
      };
    });
    return postsData
  }
}
