import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlDecode'
})
export class HtmlDecodePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var doc = new DOMParser().parseFromString(value, "text/html");
    return doc.documentElement.textContent;
  }

}
