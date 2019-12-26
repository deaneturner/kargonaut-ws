import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cnItem]'
})
export class ItemDirective {

  @Input() columns: string[] | null = null;

  @HostBinding('style.display')
  get displayStyle() {
    return 'grid';
  }

  @HostBinding('style.grid-template-columns')
  get displayGridTemplateColumns() {
    return this.columns ? this.columns.join(' ') : null;
  }


  constructor() {
    console.log('Item Directive');
  }

}
