import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cnCLine]'
})
export class CompositeLineDirective {

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
  }
}
