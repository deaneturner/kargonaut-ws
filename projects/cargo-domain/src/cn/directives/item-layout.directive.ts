import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cnItemLayout]'
})
export class ItemLayoutDirective {

  @HostBinding('class.cn-item')
  get cssClasses() {
    return true;
  }

  constructor() {
    console.log('Item Layout Directive');
  }

}
